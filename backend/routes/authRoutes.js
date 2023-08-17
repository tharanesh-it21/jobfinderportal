const express = require('express');
const router = express.Router();
const { signup, signin, logout, userProfile } = require('../controllers/authController');
const { isAuthenticated } = require('../middleware/auth');


//auth routes
router.post('/signup',signup);
///api/signin
router.post('/signin',signin);
//api/logout
router.get('/logout',logout);
//api/me
router.get('/me',isAuthenticated,userProfile);



// router.get('/',(req,res) => {
//     res.send("hello world from Node js");
// });
module.exports = router;