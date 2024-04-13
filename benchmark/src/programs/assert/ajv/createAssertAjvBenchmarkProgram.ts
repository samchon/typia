import Ajv from "ajv";
import { IJsonApplication } from "typia";

import { createAssertBenchmarkProgram } from "../createAssertBenchmarkProgram";

export const createAssertAjvBenchmarkProgram = (
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
    allErrors: false,
  });
  try {
    const validate = program.compile(app.schemas[0]);
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
