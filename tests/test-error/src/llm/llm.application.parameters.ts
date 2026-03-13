import typia from "typia";

typia.llm.application<{
  numeric(n: number): void;
}>();

typia.llm.application<{
  array(i: number[]): void;
}>();

typia.llm.application<{
  tuple(p: [number, string]): void;
}>();

typia.llm.application<{
  union(p: number | string): void;
}>();

typia.llm.application<{
  optional(p?: { value: string } | undefined): void;
}>();

typia.llm.application<{
  nullable(p: { value: string } | null): void;
}>();

typia.llm.application<{
  propertyOptional(p: { value?: string | undefined }): void;
}>();

typia.llm.application<{
  multpke(x: { x: number }, y: { y: number }): void;
}>();
