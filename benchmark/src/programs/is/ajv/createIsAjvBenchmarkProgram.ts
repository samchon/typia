import { IJsonApplication } from "typia";

import { AjvFactory } from "../../../internal/AjvFactory";
import { createIsBenchmarkProgram } from "../createIsBenchmarkProgram";

export const createIsAjvBenchmarkProgram = (app: IJsonApplication<"3.0">) => {
  try {
    const validate = AjvFactory.create({
      strict: true,
      strictNumbers: false,
    })(app);
    createIsBenchmarkProgram(validate);
  } catch (exp) {
    console.log(exp);
    createIsBenchmarkProgram(() => false);
  }
};
