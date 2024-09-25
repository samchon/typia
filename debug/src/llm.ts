import { ILlmApplication } from "@samchon/openapi";
import typia from "typia";

interface ICalculator {
  /**
   * @deprecated
   */
  plus(x: number, y: number): number;

  /**
   * @tag arithmetic
   * @tag mathmatics
   * @tag something for nothing
   */
  minus(x: number, y: number): number;
}

const app: ILlmApplication = typia.llm.application<ICalculator>();
console.log(app.functions[1]?.tags);
