import Ajv from "ajv";
import { IJsonApplication } from "typia";

import { createValidateBenchmarkProgram } from "../createValidateBenchmarkProgram";

export const createValidateAjvBenchmarkProgram = (app: IJsonApplication) => {
  const program = new Ajv({
    schemas: Object.values(app.components.schemas ?? {}),
    keywords: [
      "x-typia-tuple",
      "x-typia-jsDocTags",
      "x-typia-typeTags",
      "x-typia-required",
      "x-typia-optional",
      "x-typia-rest",
    ],
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
