###
# vert.x docker example using a Java verticle
# To build:
#   docker build -t maes95/distributed-client .
# To run:
#   docker run -it -p 8080:8080 maes95/distributed-client
###

FROM vertx/vertx3

# INSTALL NODE AND NPM

RUN rm /bin/sh && ln -s /bin/bash /bin/sh

RUN apt-get update \
    && apt-get install -y curl \
    && apt-get -y autoclean

# nvm environment variables
ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 6.11.1

RUN curl --silent -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.2/install.sh | bash

RUN source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

# INSTALL MAVEN AND JAVA 8

RUN apt-get install -y openjdk-8-jdk
RUN apt-get update
RUN apt-get install -y maven

# COPY

ENV VERTICLE_HOME /usr/verticles

COPY src/ $VERTICLE_HOME/src/
COPY pom.xml $VERTICLE_HOME/pom.xml
COPY scripts/ $VERTICLE_HOME/scripts/
COPY pems/ $VERTICLE_HOME/pems/

WORKDIR $VERTICLE_HOME

# BUILD BACKEND

RUN mvn install

# BUILD FRONTEND

RUN npm install -g typescript
RUN cd src/main/resources/webroot \
        && npm install \
        && tsc; exit 0

EXPOSE 8080

# Launch the verticle
ENTRYPOINT ["sh", "-c"]
CMD ["vertx run web.TestResultsServer -cp target/*"]
