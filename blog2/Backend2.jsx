import express from 'express'
import cors from 'cors'

const app = express()
const corsAllows = {
    origin: 'http://Frontend',
    methods: 'GET POST PUT DELETE',
    credentials: true
}

app.use(express.json())
app.use(cors(corsAllows))

app.get('/api/blog/data', (req, res) => {
    res.status(200).json({
        title: 'this is a blog title',
        time: '12:12:12',
        content: 'This content has to be displayed on the website at the frontend'
    })
})

app.listen(3000, (err) => {
    if(!err){
        console.log('server is live on 3000')
    } else{
        console.log('server is not live')
    }
})