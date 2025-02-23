import typia, { tags } from "typia";

console.log(
  typia.json.schemas<
    [
      string &
        tags.Examples<{
          x: "x";
          y: "y";
        }>,
    ]
  >().schemas[0],
);
