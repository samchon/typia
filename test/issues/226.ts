import typia from "typia";

type DeepPartial<T> = T extends object
    ? {
          [P in keyof T]?: DeepPartial<T[P]>;
      }
    : T;

const input = { a: "valid" };

console.log("Works with interface:");

interface TestInterface {
    a: string;
}

const res = typia.validateEquals<TestInterface>(input);
console.log("valid:", res);

const res2 = typia.validateEquals<Partial<TestInterface>>(input);
console.log("valid:", res2);

const res3 = typia.validateEquals<DeepPartial<TestInterface>>(input);
console.log("valid:", res3);

console.log("");
console.log("---------------------------");
console.log("");

console.log("Does not work with declare class:");

declare class TestClass {
    a: string;
}

const res4 = typia.validateEquals<TestClass>(input);
console.log("valid:", res4);

const res5 = typia.validateEquals<Partial<TestClass>>(input);
console.log("should be valid:", res5);

const res6 = typia.validateEquals<DeepPartial<TestClass>>(input);
console.log("should be invalid:", res6);
