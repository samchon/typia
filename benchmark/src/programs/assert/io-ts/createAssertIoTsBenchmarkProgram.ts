import { Mixed, Validation } from "io-ts";

import { IoTsUtils } from "../../../structures/io-ts/IoTsUtils";
import { createAssertBenchmarkProgram } from "../createAssertBenchmarkProgram";

export const createAssertIoTsBenchmarkProgram = <Schema extends Mixed>(
  schema: Schema,
) =>
  createAssertBenchmarkProgram((input) => {
    if (schema.is(input) === false) {
      const validation: Validation<any> = schema.decode(input);
      const paths: string[] = IoTsUtils.getPaths(validation);
      if (paths.length) throw new Error(paths[0]);
    }
    return input;
  });
