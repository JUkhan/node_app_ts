import http from 'http';
http.createServer()
const app = http.createServer((req, res)=>{
    res.end('Hello worlds...')
})

app.listen(3000, ()=>console.log('server is running on port 3000'))