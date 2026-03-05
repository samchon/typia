import typia from "typia";

typia.llm.application<{
  add(props: { x: number; y: number }): number;
}>();
typia.llm.application<{
  list(props: { keyword: string }): string[];
}>();
typia.llm.application<{
  check(props: { value: number }): boolean;
}>();
