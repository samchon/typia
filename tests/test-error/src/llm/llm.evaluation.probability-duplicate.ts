import typia, { tags } from "typia";

// TWO REQUIREMENTS ON ONE TARGET ARE AMBIGUOUS
typia.llm.evaluation<{
  /**
   * Is it urgent?
   *
   * @probability 0.7
   */
  urgent: boolean & tags.Probability<0.8>;
}>();
