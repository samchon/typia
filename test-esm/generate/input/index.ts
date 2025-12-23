import { ILlmController } from "@samchon/openapi";
import typia from "typia";

import IApplication from "./IApplication";

const controller: ILlmController<IApplication> =
  typia.llm.controller<IApplication>("application", {
    establishCompany: (props) => props.company,
    createDepartment: (props) => props.department,
    hire: async (props) => props.employee,
    erase: async (props) => props.entity.id,
  });
export default controller;
