import { ILlmApplication } from "@samchon/openapi";
import typia from "typia";

import { TestValidator } from "../../helpers/TestValidator";

export const test_issue_1535_llm_application_pick = (): void => {
  const assert = (props: {
    title: string;
    application: ILlmApplication<"chatgpt">;
    expected: string[];
  }): void =>
    TestValidator.equals(props.title)(
      props.application.functions.map((f) => f.name).sort(),
    )(props.expected.sort());
  assert({
    title: "all",
    application: typia.llm.application<Mathematics, "chatgpt">(),
    expected: ["plus", "minus", "multiply", "divide"],
  });
  assert({
    title: "pick",
    application: typia.llm.application<
      Pick<Mathematics, "plus" | "divide">,
      "chatgpt"
    >(),
    expected: ["plus", "divide"],
  });
  assert({
    title: "omit",
    application: typia.llm.application<
      Omit<Mathematics, "minus" | "multiply">,
      "chatgpt"
    >(),
    expected: ["plus", "divide"],
  });
};

type PlusFunction = MathematicsFunction;
type MathematicsFunction = Operation;
type Operation = (props: { x: number; y: number }) => number;

type Operator = Calculator;
type Calculator = Mathematics;
interface Mathematics {
  plus: PlusFunction;
  minus: MathematicsFunction;
  multiply: Operation;
  divide: (props: { x: number; y: number }) => number;
}
