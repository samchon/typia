import typia, { tags } from "typia";

// A PROBABILITY REQUIREMENT MUST BE IN [0, 1]
typia.llm.evaluation<{
  /** Is it urgent? */
  urgent: boolean & tags.Probability<1.5>;
}>();
