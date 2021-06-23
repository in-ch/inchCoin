interface Human { // js로 변환되지 않음. 
    name:string;
    age:number;
    gender:string;
}

const person = {
    name:"inch",
    age: 22,
    gender: "male"
}

class Human {
    public name: string; 
    private age2: number;
    public gender: string; 
    constructor(name: string, age2:number,gender?:string){
        this.name = name;
        this.age2 = age2;
        this.gender = gender;
    } // 함수인데 클래스가 호출될 때 마다 실행됨. 
};

const lynn = new Human("Lynn", 18, "female");


const sayHi = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

console.log(sayHi(lynn));

export {};

// void는 리턴이 없는 거고
// string은 만그대로 문자열 반환 