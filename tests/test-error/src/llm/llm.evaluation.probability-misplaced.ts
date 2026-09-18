import typia from "typia";

// AN OBJECT HAS NO DECISION FOR @probability TO GOVERN
typia.llm.evaluation<{
  /** @probability 0.5 */
  refund: {
    /** Is a refund requested? */
    requested: boolean;
  };
}>();
