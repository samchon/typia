import typia, { tags } from "typia";

console.log(
  typia.llm.schema<number & tags.Type<"uint32"> & tags.Minimum<10>, "3.0">(),
  typia.llm.schema<
    number & tags.Type<"uint32"> & tags.ExclusiveMinimum<10>,
    "3.0"
  >(),
);
