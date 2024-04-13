import Ajv from "ajv";
import { IJsonApplication } from "typia";

import { createIsBenchmarkProgram } from "../createIsBenchmarkProgram";

export const createIsAjvBenchmarkProgram = (app: IJsonApplication<"3.0">) => {
  const program = new Ajv({
    schemas: Object.entries(app.components.schemas ?? {}).map(
      ([key, value]) => ({
        ...value,
        $id: `#/components/schemas/${key}`,
      }),
    ),
    strict: true,
    strictNumbers: false,
  });
  try {
    const validate = program.compile(app.schemas[0]);
    createIsBenchmarkProgram(validate);
  } catch {
    createIsBenchmarkProgram(() => false);
  }
};
