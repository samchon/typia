import { ILlmApplication } from "@samchon/openapi";
import typia from "typia";

interface ICalculator {
  /**
   * @deprecated
   */
  plus(x: number, y: number): number;
}

const app: ILlmApplication = typia.llm.application<ICalculator>();
console.log(app.functions[0]?.deprecated);
