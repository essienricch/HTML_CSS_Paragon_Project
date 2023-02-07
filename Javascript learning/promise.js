// function PromiseOne(){
//     return new Promise(function (resolve, reject)){
//         let color = "red";

//         if(color == "red"){
//             resolve("success")
//         }else{
//             reject("error")
//         }
//     }
// }

// PromiseOne().then(value).catch((err) => console.log(err))


let url = "https://jsonplaceholder.typicode.com/posts";

console.log("first")

document.addEventListener('DOMContentLoaded', ()=>{
    let arr = []
    function fetchcall(){
    fetch(url)
    .then(response => 
        response.json()
    )
        
    .then(value => {
        dataConverter(value);
    })
    .catch(err => controlError(err))
    }

    fetchcall()

    function dataConverter(param) {
        for (const data of param) {
            console.log(param)
        }
    }

    function controlError(params) {
        console.log(params)
    }

    const container = document.createElement('div');
    const firstPtag = document.createElement('p');
    const secondPtag = document.createElement('p');
    const thirdPtag = document.createElement('p');
    const fourthPtag = document.createElement('p');

    container.className = 'container';
    firstPtag.className = 'firstPtag';
    secondPtag.className = 'secondPtag';
    thirdPtag.className ='thirdPtag';
    fourthPtag.className = 'fourthPtag';

    firstPtag.textContent = 'first P tag';
    secondPtag.textContent = 'second P tag';
    thirdPtag.textContent ='third P tag';
    fourthPtag.textContent = 'fourth P tag';

    container.style.backgroundColor = "black"

    firstPtag.style.fontSize = "20px"
    secondPtag.style.color = "red"
    firstPtag.style.fontWeight = "500"


    container.append(firstPtag, secondPtag, thirdPtag, fourthPtag);
    const mainBody = document.querySelector('.mainBody')
    mainBody.append(container);
    mainBody.style.width = "100%"
    mainBody.style.backgroundColor = "black"







})

