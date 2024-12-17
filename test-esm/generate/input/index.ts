import typia, { ILlmApplicationOfValidate } from "typia";

import IApplication from "./IApplication";

const application: ILlmApplicationOfValidate<"chatgpt"> =
  typia.llm.applicationOfValidate<IApplication, "chatgpt">();
export default application;
