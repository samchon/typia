import Ajv from "ajv";
import { IJsonApplication } from "typia";

import { createValidateBenchmarkProgram } from "../createValidateBenchmarkProgram";

export const createValidateAjvBenchmarkProgram = (
  app: IJsonApplication<"3.0">,
) => {
  const program = new Ajv({
    schemas: Object.entries(app.components.schemas ?? {}).map(
      ([key, value]) => ({
        ...value,
        $id: `#/components/schemas/${key}`,
      }),
    ),
    strict: true,
    strictNumbers: false,
    allErrors: true,
  });
  try {
    const validate = program.compile(app.schemas[0]);
    createValidateBenchmarkProgram((input) => {
      validate(input);
      return validate.errors ?? [];
    });
  } catch {
    createValidateBenchmarkProgram(() => ["failure"]);
  }
};
