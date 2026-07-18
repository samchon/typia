import typia from "typia";

// A UNION-OF-FUNCTIONS PROPERTY WRITTEN THROUGH A `type` ALIAS MUST BE REJECTED,
// NOT SILENTLY DROPPED (issue #2216, reopening #2195 for aliased members).
type BadUnion = (() => number) | ((value: number) => string);
typia.json.application<{
  good(): number;
  bad: BadUnion;
}>();
