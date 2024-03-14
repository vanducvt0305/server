import mongoose from 'mongoose'
import User from '../models/userModel.js'
// GET /users
// const newUser = new User({
//     name: 'Van Duc',
//     age: 30,
//     address: '123 Main St',
//     ethAddress: '0x1234567890abcdef1234567890abcdef12345678'
//   });
  
//   newUser.save()
//     .then(() => console.log('User created successfully'))
//     .catch(err => console.error('Error creating user:', err));
const getUser = (req, res) => {
    User.find()
      .then(users => {
        res.send(users); // Gửi mảng các document trả về
      })
      .catch(err => {
        console.error('Error fetching users:', err);
        res.status(500).send({ message: 'Error fetching users' }); // Gửi phản hồi lỗi
      });
  }

export {getUser}