import { ILlmApplication } from "@samchon/openapi";
import typia from "typia";

import IApplication from "./IApplication";

const application: ILlmApplication<"chatgpt"> = typia.llm.application<
  IApplication,
  "chatgpt"
>();
export default application;
