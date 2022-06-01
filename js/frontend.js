function displayBands(){
    let x = document.getElementById('allBands');
    let y = document.getElementById('andManyMore');
    if(x.style.display === "none"){
        x.style.display = 'block';
        y.style.display = 'none';
    }    
}

function deleteEmail(){
    const getBtn = document.getElementById('delete')
    const baseUrl = 'http://localhost:3000/users/:id'
    getBtn.addEventListener ('click', getInfo), 
    async function getInfo(e){
        e.preventDefault()
        const  res = await fetch(baseUrl, {
            method: 'GET'
        })
        console.log(res)
    }
    async function postInfo(){

    }
}