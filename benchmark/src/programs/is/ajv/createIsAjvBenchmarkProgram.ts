import { IJsonSchemaCollection } from "typia";

import { AjvFactory } from "../../../internal/AjvFactory";
import { createIsBenchmarkProgram } from "../createIsBenchmarkProgram";

export const createIsAjvBenchmarkProgram = (
  app: IJsonSchemaCollection<"3.0">,
): Promise<void> => {
  try {
    const validate = AjvFactory.create({
      strict: true,
      strictNumbers: false,
    })(app);
    return createIsBenchmarkProgram(validate);
  } catch (exp) {
    console.log(exp);
    return createIsBenchmarkProgram(() => false);
  }
};
