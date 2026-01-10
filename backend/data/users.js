import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'ust',
    email: 'ust@ust.ust',
    password: bcrypt.hashSync('ust', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jane Doe',
    email: 'jane@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
