const express =require('express');
const app = express();

app.get('/',(reg,res)=>{
    res.send('welcome');
});
app.listen(4000,()=>{
    console.log('listening to port 4000');
});