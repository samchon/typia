import typia from "typia";

export const test_issue_1486_llm_type_alias_object = () => {
  typia.llm.application<
    {
      call(input: FinishEvaluateMessageType): void;
    },
    "chatgpt"
  >();
  typia.llm.applicationOfValidate<
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
   * @title type
   * @description tool names
   */
  type: "finish_evaluation";

  /**
   * @title reasoning
   * @description the reason why you evaluate the agent's performance
   */
  reasoning: string;

  /**
   * @title evaluations
   * @description the evaluations of the agent's performance
   */
  evaluations: {
    /**
     * @title criteria
     * @description the criteria to be evaluated
     */
    criteria: string;

    /**
     * @title evaluation
     * @description the evaluation of the criteria
     * @enum yes, no
     */
    evaluation: "yes" | "no";
  }[];

  /**
   * @title final_decision
   * @description the final decision of the evaluation
   */
  final_decision: string;

  /**
   * @title score
   * @description the score of the evaluation
   */
  score: number;
};
