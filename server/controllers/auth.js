const prisma = require('../config/prisma');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
<<<<<<< HEAD
        const { name, phone, email, password, role } = req.body; // ✅ เพิ่ม name และ phone

        if (!name || !phone || !email || !password) { // ✅ ตรวจสอบให้ครบ
=======
        const { email, password, role } = req.body;

        if (!email || !password) {
>>>>>>> 5a65e8e532f5442fcc02d0f0f26745e85fce7336
            return res.status(400).json({ message: 'กรุณากรอกข้อมูลให้ครบ' });
        }

        const user = await prisma.user.findFirst({
            where: { email: email }
        });

        if (user) {
            return res.status(400).json({ message: "Email already exists!" });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        await prisma.user.create({
            data: {
<<<<<<< HEAD
                name: name,   // ✅ เพิ่ม name
                phone: phone, // ✅ เพิ่ม phone
=======
>>>>>>> 5a65e8e532f5442fcc02d0f0f26745e85fce7336
                email: email,
                password: hashPassword,
                role: role || "user", // ✅ Default เป็น user
                enabled: true // ✅ ให้ user ใช้งานได้เลย
            }
        });

        res.send('Register Success');
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server Error" });
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await prisma.user.findFirst({
            where: { email: email }
        });

        if (!user) {
            return res.status(400).json({ message: 'User Not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Password Invalid!' });
        }

        const payload = {
            id: user.id,
            email: user.email,
            role: user.role
        };

        const SECRET_KEY = process.env.SECRET || "defaultsecret";

        jwt.sign(payload, SECRET_KEY, { expiresIn: '1d' }, (err, token) => {
            if (err) {
                return res.status(500).json({ message: "Server Error" });
            }
            res.json({ payload, token });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server Error" });
    }
}

exports.currentUser = async (req, res) => {
    try {
        const user = await prisma.user.findFirst({
            where: { email: req.user.email },
            select: {
                id: true,
<<<<<<< HEAD
                name: true,  // ✅ ดึง name
                phone: true, // ✅ ดึง phone
=======
>>>>>>> 5a65e8e532f5442fcc02d0f0f26745e85fce7336
                email: true,
                role: true
            }
        });
        res.json({ user });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server Error' });
    }
}
