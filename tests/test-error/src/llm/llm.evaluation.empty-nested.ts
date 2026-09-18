import typia from "typia";

// NO ANSWER COULD CREATE A NESTED OBJECT WITHOUT DECISIONS
typia.llm.evaluation<{
  /** Is it urgent? */
  urgent: boolean;
  refund: {};
}>();
