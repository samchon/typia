import typia from "typia";

// A NULL VALUE IS NOT AN ANSWER
typia.llm.evaluation<{
  /** Is it late? */
  late: boolean | null;
}>();
