import typia from "typia";

console.log(
  JSON.stringify(
    typia.json.application<
      [Record<string, boolean | number | string | { x: number }>]
    >(),
    null,
    2,
  ),
);
