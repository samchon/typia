import typia from "typia";

typia.llm.schema<bigint>({
  $defs: {},
});
typia.llm.schema<BigInt>({
  $defs: {},
});
typia.llm.parameters<{
  x: bigint;
}>();
typia.llm.parameters<{
  x: BigInt;
}>();
typia.llm.application<{
  insert(props: { x: bigint }): void;
}>();
typia.llm.application<{
  insert(props: { x: BigInt }): void;
}>();
