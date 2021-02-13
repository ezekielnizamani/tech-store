import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@techstore.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },

  
  {
    name: "Ezekiel",
    email: "ezekielnizamani@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "john doe",
    email: "johndoe@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];


export default users;