import typia from "typia";

// A NULLABLE FUNCTION PROPERTY MUST BE REJECTED, NOT SILENTLY DROPPED
typia.json.application<{
  good(): number;
  bad: (() => number) | null;
}>();
