const obj = [{
    name:"akhil",
    age:26
},{
    name:"akhil",
    age:29
},
{
    name:"jaswanth",
    age:26
},
{
    name:"jaswanth",
    age:28
},{
    name:"akhi",
    age:26
},]

const names=obj.map(x=>x.name)
const removeDup=obj.filter(({name},index)=>!names.includes(name,index+1))
console.log(removeDup)

// const joinWithoutDupes = (A, B) => {
//     const a = new Set(A.map(x => x.item))
//     const b = new Set(B.map(x => x.item))
//     return [...A.filter(x => !b.has(x.item)), ...B.filter(x => !a.has(x.item))]
//   }
  
//   // Proof.
//   const output = joinWithoutDupes([{item:"apple",description: "lorem"},{item:"peach",description: "impsum"}], [{item:"apple", description: "dolor"},{item:"grape", description: "enum"}])
//   console.log(output)

  