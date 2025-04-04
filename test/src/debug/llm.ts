import typia, { tags } from "typia";

console.log(
  JSON.stringify(
    typia.llm.schema<
      number & tags.ExclusiveMinimum<0> & tags.ExclusiveMaximum<100>,
      "gemini"
    >(),
    null,
    2,
  ),
);
