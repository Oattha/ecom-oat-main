const jwt = require('jsonwebtoken')
const prisma = require('../config/prisma')

exports.authCheck = async (req, res, next) => {
    try {
<<<<<<< HEAD
        console.log("Headers:", req.headers); // 🟢 Debug

        const headerToken = req.headers.authorization;
        if (!headerToken) {
            return res.status(401).json({ message: "No Token, Authorization" });
        }

        const token = headerToken.split(" ")[1];
        const decode = jwt.verify(token, process.env.SECRET);
        req.user = decode;

        const user = await prisma.user.findFirst({
            where: {
                email: req.user.email,
            },
        });

        if (!user.enabled) {
            return res.status(400).json({ message: "This account cannot access" });
        }

        next();
    } catch (err) {
        console.log("Error in authCheck:", err);
        res.status(500).json({ message: "Token Invalid" });
    }
};

=======
        //code
        const headerToken = req.headers.authorization
        if (!headerToken) {
            return res.status(401).json({ message: "No Token, Authorization" })
        }
        const token = headerToken.split(" ")[1]
        const decode = jwt.verify(token, process.env.SECRET)
        req.user = decode

        const user = await prisma.user.findFirst({
            where: {
                email: req.user.email
            }
        })
        if (!user.enabled) {
            return res.status(400).json({ message: 'This account cannot access' })
        }

        next()
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Token Invalid' })
    }
}
>>>>>>> 5a65e8e532f5442fcc02d0f0f26745e85fce7336


exports.adminCheck = async (req, res, next) => {
    try {
        const { email } = req.user
        const adminUser = await prisma.user.findFirst({
            where: { email: email }
        })
        if (!adminUser || adminUser.role !== 'admin') {
            return res.status(403).json({ message: 'Acess Denied: Admin Only' })
        }
        // console.log('admin check', adminUser)
        next()
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Error Admin access denied' })
    }
}