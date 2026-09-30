import typia from "typia";

// A SCORE ABOVE 10 LEVELS IS REJECTED BY TYPESAFE'S API
typia.llm.evaluation<{
  /** How severe? */
  level: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}>();
