import typia from "typia";

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

const invalidInput = { child: "wrong" };

declare class TestChildClass {
  a: string;
}

declare class TestClass {
  child: TestChildClass;
}

const res4 = typia.validateEquals<TestClass>(invalidInput);
console.log("correct expected:", res4);

const res5 = typia.validateEquals<Partial<TestClass>>(invalidInput);
console.log("correct expected:", res5);

const res6 = typia.validateEquals<DeepPartial<TestClass>>(invalidInput);
console.log("incorrect expected:", res6);
