interface Human {
    name:string;
    age:number;
    gender:string;
}

const person = {
    name:"inch",
    age: 22,
    gender: "male"
}
const sayHi = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

console.log(sayHi(person));

export {};

// void는 리턴이 없는 거고
// string은 만그대로 문자열 반환 