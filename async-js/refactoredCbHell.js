function login(email){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve({eMail: email})
        }, 1000)
    });
}

function renderView(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(["Charts", "Lists"]);
        }, 2000)
    })
}

function viewDetails(view){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
                resolve(view)
        }, 1000) 
    })  
}

//runs synchronously
// renderView()
// .then(render => viewDetails(render))
// .then(output => console.log(output))

// //runs login and renderView at the same time
// Promise.all([login("Saras"), renderView()])
// .then(result => console.log(result))

async function display(){
    try{
        const loginUser = await login("su@goomail.com");
        const rView = await renderView();
        const vDeets = await viewDetails(rView);
        console.log(loginUser.eMail);
        console.log(vDeets);
    }
    catch(e){
        console.log(e);
    }
}

display();






