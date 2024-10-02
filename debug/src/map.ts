import typia from "typia";

const check = typia.createAssert<
  Map<boolean, number> | Map<number, number> | Map<string, number>
>();
console.log(
  check(
    new Map<boolean, number>([
      [false, 1],
      [true, 2],
    ]),
  ),
);
