import typia from "typia";

// A PLAIN NUMBER IS NOT A CLOSED SET; USE A NUMERIC LITERAL UNION FOR A SCORE
typia.llm.evaluation<{
  /** How many items? */
  count: number;
}>();
