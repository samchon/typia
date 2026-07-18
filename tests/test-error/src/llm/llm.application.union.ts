import typia from "typia";

// A UNION-OF-FUNCTIONS PROPERTY MUST BE REJECTED, NOT SILENTLY DROPPED
typia.llm.application<{
  good(p: { value: string }): void;
  bad: ((p: { value: string }) => void) | ((p: { flag: boolean }) => void);
}>();
