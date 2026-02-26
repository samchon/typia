import Ajv from "ajv";
import { IJsonSchemaCollection } from "typia";

import { AjvFactory } from "../../../internal/AjvFactory";
import { createValidateBenchmarkProgram } from "../createValidateBenchmarkProgram";

export const createValidateAjvBenchmarkProgram = (
  app: IJsonSchemaCollection<"3.0">,
) => {
  try {
    const validate = AjvFactory.create({
      strict: true,
      strictNumbers: false,
      allErrors: true,
    })(app);
    createValidateBenchmarkProgram((input) => {
      validate(input);
      return validate.errors ?? [];
    });
  } catch {
    createValidateBenchmarkProgram(() => ["failure"]);
  }
};
