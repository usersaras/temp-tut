let p = new Promise((resolve, reject, user)=>{
    setTimeout(()=>{
        resolve(user = "User")
        // reject(new Error("new not lg"))
    }, 1000)
})

p.then(groza => {
    console.log(groza);
}).catch(err=>console.log(err.message));