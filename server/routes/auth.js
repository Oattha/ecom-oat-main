<<<<<<< HEAD
// ✅ Import module ที่ต้องใช้
const express = require('express')
const router = express.Router()

// ✅ Import Controller (register, login, currentUser)
const { register, login, currentUser } = require('../controllers/auth')

// ✅ Import Middleware (authCheck, adminCheck)
const { authCheck, adminCheck } = require('../middlewares/authCheck')

// ✅ Route สำหรับสมัครสมาชิก
router.post('/register', register)

// ✅ Route สำหรับเข้าสู่ระบบ
router.post('/login', login)

// ✅ Route สำหรับดึงข้อมูลผู้ใช้ (ต้อง login ก่อน)
router.post('/current-user', authCheck, currentUser)

// ✅ Route สำหรับดึงข้อมูล admin (ต้อง login + เป็น admin)
router.post('/current-admin', authCheck, adminCheck, currentUser)

// ✅ ส่งออก router ไปใช้ใน server.js
module.exports = router
=======
// import ....
const express = require('express')
const router = express.Router()
// import controller
const { register, login, currentUser } = require('../controllers/auth')
// import Middleware
const { authCheck, adminCheck } = require('../middlewares/authCheck')

router.post('/register', register)
router.post('/login', login)
router.post('/current-user', authCheck, currentUser)
router.post('/current-admin', authCheck, adminCheck, currentUser)

module.exports = router
>>>>>>> 5a65e8e532f5442fcc02d0f0f26745e85fce7336
