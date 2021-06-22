const sayHi = (name:string, age:number, gender: string): string => {
    return `Hello ${name}, you are ${age}, you are a ${gender}`;
};

console.log(sayHi("Inch",44,"male"));

export {};

// void는 리턴이 없는 거고
// string은 만그대로 문자열 반환 