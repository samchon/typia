import typia, { tags } from "typia";

console.log(
  JSON.stringify(
    typia.json.application<[number[] & tags.UniqueItems]>(),
    null,
    2,
  ),
  typia.is<number[] & tags.UniqueItems>([1, 2, 3]),
  typia.is<number[] & tags.UniqueItems>([1, 2, 2]),
);
