const multer = require('multer');
const DIR = __dirname + 'uploads/images';

const upload = multer({
    dest: DIR,
    // fileFilter: (req, file, cb) => {
    //     if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
    //         cb(null, true);
    //     } else {
    //         cb(null, false);
    //         return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    //     }
    // }
});
console.log('upload',upload);
module.exports = upload