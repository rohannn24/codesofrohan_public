import express from 'express'
import env from 'dotenv'
import sendEmail from './utils/sendEmail.js'

env.config()

const app = express()

app.use(express.json())

app.post('/send-email', async (req, res) => {
    try {
        const { reciver, subject, body } = req.body;
        await sendEmail(reciver, subject, body);
        res.status(200).json({
            success: true,
            message: 'email sent successfully'
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: '500 internal server error'
        })
    }
})

app.listen(8080, err => err ? console.log(err) : console.log('Server is live'))