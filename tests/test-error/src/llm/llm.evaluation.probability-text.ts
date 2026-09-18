import typia from "typia";

// A @probability COMMENT MUST BE A NUMBER
typia.llm.evaluation<{
  /**
   * Is it late?
   *
   * @probability high
   */
  late: boolean;
}>();
