let a=["kakaka","asjksjsakaks","askjsasakjk","hashjasj"]
const rotate=(arr,rotation)=>{
    if (rotation===0){
        return
    }
    else{
        for (let i=0;i<rotation;i++){
            let instance=arr.pop()
            arr.unshift(instance)
        }
        return arr
    }

}
console.log(rotate(a,2))