import typia from "typia";

export const test_issue_1486_llm_type_alias_object = () => {
  typia.llm.application<
    {
      call(input: FinishEvaluateMessageType): void;
    },
    "chatgpt"
  >();
  typia.llm.application<
    {
      call(input: FinishEvaluateMessageType): void;
    },
    "chatgpt"
  >();
  typia.llm.parameters<FinishEvaluateMessageType, "chatgpt">();
  typia.llm.schema<FinishEvaluateMessageType, "chatgpt">({
    $defs: {},
  });
};

type FinishEvaluateMessageType = {
  /**
   * Tool names
   *
   * @title type
   */
  type: "finish_evaluation";

  /**
   * The reason why you evaluate the agent's performance
   *
   * @title reasoning
   */
  reasoning: string;

  /**
   * The evaluations of the agent's performance
   *
   * @title evaluations
   */
  evaluations: {
    /**
     * The criteria to be evaluated
     *
     * @title criteria
     */
    criteria: string;

    /**
     * The evaluation of the criteria
     *
     * @title evaluation
     * @enum yes, no
     */
    evaluation: "yes" | "no";
  }[];

  /**
   * The final decision of the evaluation
   *
   * @title final_decision
   */
  final_decision: string;

  /**
   * The score of the evaluation
   *
   * @title score
   */
  score: number;
};
