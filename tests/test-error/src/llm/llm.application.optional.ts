import typia from "typia";

// AN OPTIONAL FUNCTION PROPERTY MUST BE REJECTED, NOT SILENTLY DROPPED
typia.llm.application<{
  good(p: { value: string }): void;
  bad?(p: { value: string }): void;
}>();
