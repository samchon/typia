import typia from "typia";

// AN OPTIONAL FUNCTION PROPERTY MUST BE REJECTED, NOT SILENTLY DROPPED
typia.json.application<{
  good(): number;
  bad?(): number;
}>();
