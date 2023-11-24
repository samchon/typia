import { Mixed, Validation, array } from "io-ts";

import { IoTsUtils } from "../../../structures/io-ts/IoTsUtils";
import { createValidateErrorBenchmarkProgram } from "../createValidateErrorBenchmarkProgram";

export const createValidateErrorIoTsBenchmarkProgram = <Schema extends Mixed>(
  instace: Schema,
) => {
  const schema = array(instace);
  return createValidateErrorBenchmarkProgram((input) => {
    if (schema.is(input) === true) return [];
    const validation: Validation<any> = schema.decode(input);
    return IoTsUtils.getPaths(validation);
  });
};
