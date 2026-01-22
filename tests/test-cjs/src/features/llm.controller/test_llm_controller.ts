import { ILlmController } from "@samchon/openapi";
import typia from "typia";

export const test_llm_controller = (): void => {
  const controller: ILlmController<Calculator> =
    typia.llm.controller<Calculator>("calculator", new Calculator());
  typia.assertGuard<ILlmController<Calculator>>(controller);
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
