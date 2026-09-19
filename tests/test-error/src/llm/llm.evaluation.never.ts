import typia from "typia";

// NO ANSWER CAN SATISFY A PROPERTY OF TYPE never
typia.llm.evaluation<{
  /** Is it impossible? */
  impossible: never;
}>();
