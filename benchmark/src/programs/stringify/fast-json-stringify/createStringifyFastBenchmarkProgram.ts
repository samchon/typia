import fast from "fast-json-stringify";
import typia from "typia";

import { createStringifyBenchmarkProgram } from "../createStringifyBenchmarkProgram";

export const createStringifyFastBenchmarkProgram = (
  app: typia.IJsonApplication<"3.0">,
) => {
  const stringify = (() => {
    try {
      return fast({
        ...app.schemas[0],
        ...app,
      } as any);
    } catch {
      return null;
    }
  })();
  return createStringifyBenchmarkProgram(stringify);
};
