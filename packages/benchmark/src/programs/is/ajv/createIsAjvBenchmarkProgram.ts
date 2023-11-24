import Ajv from "ajv";
import { IJsonApplication } from "typia";

import { createIsBenchmarkProgram } from "../createIsBenchmarkProgram";

export const createIsAjvBenchmarkProgram = (app: IJsonApplication) => {
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
  });
  try {
    const validate = program.compile(app.schemas[0]);
    createIsBenchmarkProgram(validate);
  } catch {
    createIsBenchmarkProgram(() => false);
  }
};
