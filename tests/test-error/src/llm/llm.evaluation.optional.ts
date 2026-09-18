import typia from "typia";

// EVERY PROPERTY OF THE RESULT NEEDS AN ANSWER
typia.llm.evaluation<{
  /** Is it urgent? */
  urgent?: boolean;
  /** Is it late? */
  late: boolean | null;
}>();
