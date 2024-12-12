import { ILlmApplication } from "@samchon/openapi";
import typia from "typia";

interface SomeApplication {
  plus(props: { x: number; y: number }): number;

  /**
   * @human
   */
  minus(props: { x: number; y: number }): number;
}

const app: ILlmApplication<"chatgpt"> = typia.llm.application<
  SomeApplication,
  "chatgpt"
>();
console.log(app);
