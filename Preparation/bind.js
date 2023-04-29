const a={Details:function (message){
    return ("hi"+this.name+"age"+this.age+message)
}}
const person1={name:"akhil",age:26}

const b =a.Details.bind(person1,"you are awesome")
console.log(b())