/*
1) COMMON JS MODULEs (require -> module.exports)
2) ES moduules (import/export)
*/ 
//COMMON JS module
// const User = require("./User");
// const user = new User("Alex", 22);
// console.log(user.toString());

import User from "./User.js";
const user = new User("Alex", 22);
console.log(user.toString());