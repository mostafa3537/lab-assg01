
const validationtodo = (req,res,next)=>{
    const {title} = req.body
    console.log(title);
    if(!title){
        next('Error title no found')
    }
    next()
}

module.exports = {
    validationtodo
}