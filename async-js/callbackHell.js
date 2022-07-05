function login(email, cb){
    setTimeout(()=>{
        console.log("data received");
        
        cb( {eMail: email} );
    }, 1500)
}

function renderView(cb){
    setTimeout(()=>{
        cb(["Charts", "Lists"]);
    }, 2000)
}

function viewDetails(view, cb3){
    setTimeout(()=>{
        cb3(view);
    }, 1000)
}

let em = login('email@goomail.com', function callback(em){
    
    console.log(em);
    let {eMail} = em;

    renderView(videoss =>{

        let vids = (videoss);

        viewDetails(vids, function empath(){
            console.log("Account:", eMail)
            vids.forEach((item)=>{
                console.log(item+" Deets");
            })
        })
    })
});


