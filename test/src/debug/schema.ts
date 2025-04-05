import typia, { tags } from "typia";

console.log(
  typia.llm.schema<number & tags.Type<"uint32"> & tags.Minimum<10>, "3.0">(),
);
