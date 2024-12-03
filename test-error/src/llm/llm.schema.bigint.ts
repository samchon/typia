import typia from "typia";

typia.llm.schema<bigint, "chatgpt">({});
typia.llm.parameters<
  {
    x: bigint;
  },
  "gemini"
>();
typia.llm.application<
  {
    insert(props: { x: bigint }): void;
  },
  "gemini"
>();
