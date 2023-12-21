

// function urekYarat(){
//     let urek = document.createElement('div')
//     urek.classList.add("urek")
//     urek.innerHTML = "&#10084"
//     urek.style.left = Math.random() * 100 + "vw"
//     urek.style.animationDuration = Math.random() * 2 + 5 + 3  +"s"
//     document.body.appendChild(urek)

//     setTimeout(()=>{
//         urek.remove()
//     },9000)
// }


// setInterval(urekYarat,300)


// function urekYarat(){
//     let urek = document.createElement('div')
//     urek.innerHTML = "&#10084"
//     urek.classList.add("urek")
//     urek.style.left = Math.random()*100 +"vw"
//     urek.style.animationDuration = Math.random()*2 + 5 + 3 +"s"
//     document.body.appendChild(urek)

//     setTimeout(()=>{
//         urek.remove()
//     },7500)

// }

// setInterval(urekYarat,300)


function urekDuzelt(){
 let urek =  document.createElement('div')
 
 urek.classList.add("urek")
 urek.innerHTML = "&#10084 "
 urek.style.left = Math.random()*100 + "vw"
 urek.style.animationDuration = Math.random() * 100 + 5 + 3 + "s"
urek.style.color = `rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
 document.body.appendChild(urek)

 setTimeout(()=>{
    urek.remove()
 },10000)
}

setInterval(urekDuzelt,10)