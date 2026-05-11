import typia from "typia";

interface Member {
  id: string;
  age: number;
}

const input: unknown = {
  id: "a",
  age: 1,
};

if (typia.is<Member>(input) === false) {
  throw new Error("typia.is failed");
}

console.log("typia.is passed");
