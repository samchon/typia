import typia from "typia";

type Values =
  | false
  | 1
  | 2
  | 3
  | 4
  | 5
  | "six"
  | "seven"
  | 8n
  | 9n
  | "ten"
  | "eleven";

console.log(
  typia.createIs<Values>().toString(),
  typia.createAssert<Values>().toString(),
  typia.createValidate<Values>().toString(),
);
