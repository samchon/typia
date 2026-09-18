import typia from "typia";

// AN EVALUATION MODEL ANSWERS ONLY CLOSED SETS
typia.llm.evaluation<{
  /** What is the customer's name? */
  name: string;
}>();
