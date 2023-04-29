function traiL(message){
    return (this.name+","+"age"+this.age+message)
}
const person1={name:"akhil",age:26}

const a = traiL.apply(person1,["Are You ok"])
console.log(a)