import typia from "typia";

typia.llm.schema<bigint>({
  $defs: {},
});
typia.llm.parameters<{
  x: bigint;
}>();
typia.llm.application<{
  insert(props: { x: bigint }): void;
}>();
