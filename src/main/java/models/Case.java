package models;

public class Case {
    private final int numChats;
    private final int getNumUsersPerChat;

    public Case(int numChats, int numUsers){
        this.numChats = numChats;
        this.getNumUsersPerChat = numUsers;
    }

    public int getNumChats() {
        return numChats;
    }

    public int getNumUsersPerChat() {
        return getNumUsersPerChat;
    }

    @Override
    public String toString() {
        return "(" + numChats + " chats :" + getNumUsersPerChat+ " users per chat)";
    }
}
