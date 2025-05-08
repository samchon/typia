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
    application: typia.llm.application<Mathmatics, "chatgpt">(),
    expected: ["plus", "minus", "multiply", "divide"],
  });
  assert({
    title: "pick",
    application: typia.llm.application<
      Pick<Mathmatics, "plus" | "divide">,
      "chatgpt"
    >(),
    expected: ["plus", "divide"],
  });
  assert({
    title: "omit",
    application: typia.llm.application<
      Omit<Mathmatics, "minus" | "multiply">,
      "chatgpt"
    >(),
    expected: ["plus", "divide"],
  });
};

type PlusFunction = MathmaticsFunction;
type MathmaticsFunction = Operation;
type Operation = (props: { x: number; y: number }) => number;

type Operator = Calculator;
type Calculator = Mathmatics;
interface Mathmatics {
  plus: PlusFunction;
  minus: MathmaticsFunction;
  multiply: Operation;
  divide: (props: { x: number; y: number }) => number;
}
