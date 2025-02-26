<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const { authCheck, adminCheck } = require("../middlewares/authCheck");

=======
const express = require('express')
const router = express.Router()
const { authCheck, adminCheck } = require('../middlewares/authCheck')
>>>>>>> 5a65e8e532f5442fcc02d0f0f26745e85fce7336
const {
    listUsers,
    changeStatus,
    changeRole,
    userCart,
    getUserCart,
    emptyCart,
    saveAddress,
    saveOrder,
    getOrder,
<<<<<<< HEAD
    saveNameAndPhone,
    getNameAndPhone,
    currentUser,
    updateUser,
    getUserById // ✅ เพิ่ม updateUser
} = require('../controllers/user');

router.get('/users', authCheck, adminCheck, listUsers);
router.post('/change-status', authCheck, adminCheck, changeStatus);
router.post('/change-role', authCheck, adminCheck, changeRole);

router.post('/user/cart', authCheck, userCart);
router.get('/user/cart', authCheck, getUserCart);
router.delete('/user/cart', authCheck, emptyCart);

router.post('/user/address', authCheck, saveAddress);

router.post('/user/order', authCheck, saveOrder);
router.get('/user/order', authCheck, getOrder);

router.post('/user/name-phone', authCheck, saveNameAndPhone);
router.get('/user/name-phone', authCheck, getNameAndPhone);

router.get("/current-user", authCheck, currentUser);

// ✅ ตอนนี้ updateUser จะถูกใช้งานได้
router.put("/user/update", authCheck, updateUser);


router.get('/user/:id', authCheck, getUserById); // ดึงข้อมูลผู้ใช้ตาม ID

module.exports = router;
=======
    saveNameAndPhone
} = require('../controllers/user')

router.get('/users', authCheck, adminCheck, listUsers)
router.post('/change-status', authCheck, adminCheck, changeStatus)
router.post('/change-role', authCheck, adminCheck, changeRole)

router.post('/user/cart', authCheck, userCart)
router.get('/user/cart', authCheck, getUserCart)
router.delete('/user/cart', authCheck, emptyCart)

router.post('/user/address', authCheck, saveAddress)

router.post('/user/order', authCheck, saveOrder)
router.get('/user/order', authCheck, getOrder)

router.post('/user/name-phone', authCheck, saveNameAndPhone);
router.get('/user/name-phone', authCheck, getUserCart)


module.exports = router
>>>>>>> 5a65e8e532f5442fcc02d0f0f26745e85fce7336
