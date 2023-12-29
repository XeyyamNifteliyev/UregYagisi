function urekDuzelt() {
   let urek = document.createElement('div')
   urek.classList.add("urek")
   urek.innerHTML = "&#10084 "
   urek.style.left = Math.random() * 100 + "vw"
   urek.style.animationDuration = Math.random() * 100 + 5 + 3 + "s"
   urek.style.color = `rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
   document.body.appendChild(urek)

   setTimeout(() => {
      urek.remove()
   }, 10000)
}
setInterval(urekDuzelt, 10)