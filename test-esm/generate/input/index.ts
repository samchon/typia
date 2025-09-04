import { ILlmController } from "@samchon/openapi";
import typia from "typia";

import IApplication from "./IApplication";

const controller: ILlmController<"chatgpt"> = typia.llm.controller<
  IApplication,
  "chatgpt"
>("application", {
  establishCompany: (props) => props.company,
  createDepartment: (props) => props.department,
  hire: async (props) => props.employee,
  erase: async (props) => props.entity.id,
});
export default controller;
