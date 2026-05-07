# How Generics Build Reusable and Type-Safe Code in TypeScript

## Introduction

Generics are one of the most powerful features in TypeScript. They allow developers to create reusable functions, classes, and components without losing type safety.

Instead of writing separate logic for different data types, generics allow one piece of code to work with multiple types while still maintaining strict typing.

This blog explains how generics improve reusability, flexibility, and code quality in TypeScript.

---

## What Are Generics?

Generics allow a type to be passed as a parameter.

Example:

```typescript
function identity<T>(value: T): T {
  return value;
}
````

Here:

* `T` is a generic type parameter
* The function accepts any type
* The same type is returned

Usage:

```typescript
identity<string>("TypeScript");
identity<number>(100);
```

The function works with multiple data types while preserving type information.

---

## Reusability with Generics

Without generics, developers often write duplicate functions.

### Without Generics

```typescript
function getString(value: string): string {
  return value;
}

function getNumber(value: number): number {
  return value;
}
```

This creates unnecessary repetition.

### With Generics

```typescript
function getValue<T>(value: T): T {
  return value;
}
```

Now one function supports all types.

---

## Generics with Arrays

Generics are especially useful for arrays.

```typescript
function getFirstElement<T>(array: T[]): T {
  return array[0];
}
```

Usage:

```typescript
getFirstElement<number>([1, 2, 3]);
getFirstElement<string>(["A", "B", "C"]);
```

TypeScript automatically understands the return type.

---

## Generics with Interfaces

Generics can also improve interfaces.

```typescript
interface ApiResponse<T> {
  success: boolean;
  data: T;
}
```

Usage:

```typescript
const userResponse: ApiResponse<string> = {
  success: true,
  data: "John Doe",
};
```

This makes interfaces flexible and reusable.

---

## Benefits of Generics

### 1. Reusability

One function or class can work with many data types.

### 2. Type Safety

TypeScript ensures correct data types during compilation.

### 3. Cleaner Code

Generics reduce duplicate code and improve maintainability.

### 4. Better Developer Experience

Editors provide accurate autocomplete and error detection.

---

## Real-World Example

```typescript
function createPair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}
```

Usage:

```typescript
createPair<string, number>("Age", 21);
```

Output:

```typescript
["Age", 21]
```

This function supports multiple types while remaining fully typed.

---

## Conclusion

Generics are essential for writing scalable and reusable TypeScript applications.

They help developers:

* Avoid duplicate code
* Maintain strict type safety
* Create flexible functions and interfaces
* Improve code readability and maintainability

By using generics effectively, developers can build powerful applications that remain both reusable and reliable.

````