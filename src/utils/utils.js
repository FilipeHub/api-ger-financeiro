// The users of the current chat room
const users = [];

/**
 * Add a user in the Chat Room  
 */
const addUser = ({id, name, room }) => {
    name = name.trim();
    room = room.trim();

    const user = { id, name, room};

    users.push(user);

    return { user };
};

/**
 * Returns the user from the array of users from the Chat Room  
 */
const getUser = (id) => {
    return users.find((user) => user.id === id);
};

module.exports = {addUser, getUser};