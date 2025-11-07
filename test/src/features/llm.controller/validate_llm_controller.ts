import { ILlmController, ILlmSchema } from "@samchon/openapi";
import typia, { AssertionGuard } from "typia";

export const test_llm_controller_chatgpt = (): void =>
  validate_llm_controller(
    typia.llm.controller<Calculator, "chatgpt">("chatgpt", new Calculator()),
    typia.createAssertGuard<ILlmController<"chatgpt", Calculator>>(),
  );

export const test_llm_controller_claude = (): void =>
  validate_llm_controller(
    typia.llm.controller<Calculator, "claude">("claude", new Calculator()),
    typia.createAssertGuard<ILlmController<"claude", Calculator>>(),
  );
export const test_llm_controller_gemini = (): void =>
  validate_llm_controller(
    typia.llm.controller<Calculator, "gemini">("gemini", new Calculator()),
    typia.createAssertGuard<ILlmController<"gemini", Calculator>>(),
  );

export const test_llm_controller_llm_v30 = (): void =>
  validate_llm_controller(
    typia.llm.controller<Calculator, "3.0">("3.0", new Calculator()),
    typia.createAssertGuard<ILlmController<"3.0", Calculator>>(),
  );

export const test_llm_controller_llm_v31 = (): void =>
  validate_llm_controller(
    typia.llm.controller<Calculator, "3.1">("3.1", new Calculator()),
    typia.createAssertGuard<ILlmController<"3.1", Calculator>>(),
  );

const validate_llm_controller = <Model extends ILlmSchema.Model>(
  controller: ILlmController<Model, Calculator>,
  assertGuard: (
    input: unknown,
  ) => AssertionGuard<ILlmController<Model, Calculator>>,
): void => {
  assertGuard(controller);
};

interface IProps {
  x: number;
  y: number;
}
class Calculator {
  public plus({ x, y }: IProps): number {
    return x + y;
  }
  public minus({ x, y }: IProps): number {
    return x - y;
  }
  public multiply({ x, y }: IProps): number {
    return x * y;
  }
  public divide({ x, y }: IProps): number {
    return x / y;
  }
}
