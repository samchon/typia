import { Mixed, Validation, array } from "io-ts";

import { IoTsUtils } from "../../../structures/io-ts/IoTsUtils";
import { createAssertErrorBenchmarkProgram } from "../createAssertErrorBenchmarkProgram";

export const createAssertErrorIoTsBenchmarkProgram = <Schema extends Mixed>(
  instace: Schema,
) => {
  const schema = array(instace);
  return createAssertErrorBenchmarkProgram((input) => {
    if (schema.is(input) === false) {
      const validation: Validation<any> = schema.decode(input);
      const paths: string[] = IoTsUtils.getPaths(validation);
      if (paths.length) throw new Error(paths[0]);
    }
    return input;
  });
};
