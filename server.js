const express = require('express');
const mongoose = require('mongoose')
const upload = require('./midware/midmulter');
const User = require('./model/User')
// const DIR = __dirname + '/uploads/images'
// const upload = multer({
//     dest: DIR,
//     fileFilter: (req, file, cb) => {
//         if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
//             cb(null, true);
//         } else {
//             cb(null, false);
//             return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
//         }
//     }
// });

const app = express();


app.use(express.static('public')); 

app.post('/upload',upload.single('profileImg'), async (req, res) => {
    res.send('hi')
    
    const url = req.protocol + '://' + req.get('host')
    console.log('url:::', url)
    console.log(' mongoose.Types.ObjectId:::', mongoose.Types.ObjectId())
    console.log('req.file.filename:::', req)
    if (req) {
        res.json(req.file);  
    }
//     const user = await new User({
//         _id: new mongoose.Types.ObjectId(),
//         profileImg: url + '/upload/' + req.file.filename
//     });
//     await user.save().then(result => { 
//         res.status(201).json({
//             message: "User registered successfully!",
//             userCreated: {
//                 _id: result._id,
//                 profileImg: result.profileImg
//             }
//         })
//     }).catch(err => {
//         console.log(err),
//             res.status(500).json({
//                 error: err
//             });
//     })
//    console.log('user DB:::', user)

})

const mongodbUri = 'mmongodb+srv://admin:passwordpassword@cluster0-7vuov.gcp.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(mongodbUri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => {
    console.log('Database sucessfully connected')
},
    error => {
        console.log('Database could not be connected: ' + error)
    }
)



const PORT = 3000;
app.listen(PORT, () => {
    console.log('Listening at ' + PORT);
});

