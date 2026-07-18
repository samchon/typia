import typia from "typia";

// A NULLABLE FUNCTION PROPERTY MUST BE REJECTED, NOT SILENTLY DROPPED
typia.llm.application<{
  good(p: { value: string }): void;
  bad: ((p: { value: string }) => void) | null;
}>();
