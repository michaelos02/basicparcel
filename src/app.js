import name from './multipleFiles'
import ramIt from './multipleFiles'

console.log("Got here")
console.log("Got to 2!",name)
window.changeIt = function(){
    let el = document.getElementById("change")
    el.innerHTML="How about noeeed!!!!"
}
window.changeText = ()=>{
    let el = document.getElementById("change")
    el.innerHTML="Chaned indeed!!!!"
}

window.changeText2=()=>{
    let el = document.getElementById("change")
    el.innerHTML="Changed 2!!!!"
}