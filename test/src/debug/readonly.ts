import typia from "typia";

console.log(
  typia.json.schema<{
    readonly id: string;
  }>().schema,
);
