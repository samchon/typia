import typia from "typia";

// A UNION-OF-FUNCTIONS PROPERTY MUST BE REJECTED, NOT SILENTLY DROPPED
typia.json.application<{
  good(): number;
  bad: (() => number) | ((value: number) => string);
}>();
