import { IJsonSchemaCollection } from "typia";

import { AjvFactory } from "../../../internal/AjvFactory";
import { createAssertBenchmarkProgram } from "../createAssertBenchmarkProgram";

export const createAssertAjvBenchmarkProgram = (
  app: IJsonSchemaCollection<"3.0">,
) => {
  try {
    const validate = AjvFactory.create({
      strict: true,
      strictNumbers: false,
      allErrors: false,
    })(app);
    createAssertBenchmarkProgram((input) => {
      const success: boolean = validate(input);
      if (!success) throw new Error(validate.errors?.[0].message ?? "unknown");
      return input;
    });
  } catch {
    createAssertBenchmarkProgram(() => {
      new Error();
    });
  }
};
