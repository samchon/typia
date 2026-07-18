import typia from "typia";

// AN OPTIONAL FUNCTION PROPERTY WRITTEN THROUGH A `type` ALIAS MUST BE REJECTED,
// NOT SILENTLY DROPPED (issue #2216, reopening #2195 for aliased members).
type BadFn = () => number;
typia.json.application<{
  good(): number;
  bad?: BadFn;
}>();
