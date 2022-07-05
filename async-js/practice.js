let yt = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(
            videos = [1,2,3,4,5]
        )
    }, 1000)
});

// yt
//  .then(val=>{console.log(val)})

async function display(){
    try{
     let fromYt = await yt;
     console.log(fromYt);
    } catch(e){
        console.log(e);
    }
}

display();