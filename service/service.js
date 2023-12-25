//* Create a hashmap to store the session ID and the user
const sessionIDtoUserMap = new Map();

//* Create a setter function to store ID and User into hashmap
function setUser(id, user) {
    sessionIDtoUserMap.set(id, user);
}

//* Create a getter function to fetch user from ID
function getUser(id) {
    return sessionIDtoUserMap.get(id);
}

module.exports = { setUser, getUser };
