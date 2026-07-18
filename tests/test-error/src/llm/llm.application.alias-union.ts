import typia from "typia";

// A UNION-OF-FUNCTIONS PROPERTY WRITTEN THROUGH A `type` ALIAS MUST BE REJECTED,
// NOT SILENTLY DROPPED (issue #2216, reopening #2195 for aliased members).
type BadUnion =
  | ((p: { value: string }) => void)
  | ((p: { flag: boolean }) => void);
typia.llm.application<{
  good(p: { value: string }): void;
  bad: BadUnion;
}>();
