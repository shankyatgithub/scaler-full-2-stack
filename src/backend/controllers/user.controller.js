const User = require("../models/user.model");

const { getAllObjects_Factory_Handler, getObjectById_Factory_Handler, createObject_Factory_Handler, updateObjectById_Factory} = require("../utils/crudFactory");

/** Router Handler **/
const getAllUsers_handler = getAllObjects_Factory_Handler(User);
const createNewUser_handler = createObject_Factory_Handler(User);

module.exports = {
    getAllUsers_handler,
    createNewUser_handler
}
