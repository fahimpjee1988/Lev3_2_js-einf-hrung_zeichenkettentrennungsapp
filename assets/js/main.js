
let chain = document.getElementById("chain")
let chain1 =document.getElementById("chain1")
let after =document.getElementById("after")
let back = document.getElementById("back")
let front =document.getElementById("front")

function cut(){
   if(after.checked){
    //    back.innerHTML=chain.slice(chain.indexOf(chain1),chain.length)
    // chain.value.indexOf(document.getElementById("chain1").value,chain.length)

    back.innerHTML=chain.value.slice(chain.value.indexOf(document.getElementById("chain1").value,chain.length))



    //    console.log("test")
    // console.log(chain.value)
    // console.log(chain1.value)
    // console.log(chain.value.indexOf('a'))

   }else {
    front.innerHTML=chain.value.slice(0,chain.value.indexOf(document.getElementById("chain1").value))

   }

//    console.log(chain.value)
//    console.log(chain1.value)

}

