function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((number) => number % 2 === 0);
}

function reverseString(input: string): string {
  return input.split("").reverse().join("");
}

type StringOrNumber = string | number;

function checkType(input: StringOrNumber): string {
  if (typeof input === "string") {
    return '"String";';
  } else {
    return '"Number";';
  }
}


function getProperty<T extends object, K extends keyof T>(
  obj: T,
  key: K,
): string {
  const value = obj[key];
  return `"${value}";`;
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  return {
    ...book,
    isRead: true,
  };
}

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }
  getDetails(): string {
    return `"Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}";`;
  }
}


function getIntersection(array1: number[], array2: number[]): number[] {
  return array1.filter((value) => array2.includes(value));
}