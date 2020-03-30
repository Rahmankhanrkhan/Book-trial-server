const User = require('../model/User');
const upload = require('./midware/midmulter')
const express = require('express')
const router = express.Router();

router.post('/upload', upload.single('profileImg'), (req, res, next) => {
  if (req) {
    res.send('useroutes');
} 
else throw 'error';
    // const url = req.protocol + '://' + req.get('host')
    // const user = new User({
    //     _id: new mongoose.Types.ObjectId(),
    //     name: req.body.name,
    //     profileImg: url + '/public/' + req.file.filename
    // });
    // user.save().then(result => {
    //     res.status(201).json({
    //         message: "User registered successfully!",
    //         userCreated: {
    //             _id: result._id,
    //             profileImg: result.profileImg
    //         }
    //     })
    // }).catch(err => {
    //     console.log(err),
    //         res.status(500).json({
    //             error: err
    //         });
    // })
})

router.get("/", (req, res, next) => {
    User.find().then(data => {
        res.status(200).json({
            message: "User list retrieved successfully!",
            users: data
        });
    });
});

module.exports = router;