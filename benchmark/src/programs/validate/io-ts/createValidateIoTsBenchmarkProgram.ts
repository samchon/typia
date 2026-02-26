import { Mixed, Validation } from "io-ts";

import { IoTsUtils } from "../../../structures/io-ts/IoTsUtils";
import { createValidateBenchmarkProgram } from "../createValidateBenchmarkProgram";

export const createValidateIoTsBenchmarkProgram = <Schema extends Mixed>(
  schema: Schema,
) =>
  createValidateBenchmarkProgram((input) => {
    if (schema.is(input) === true) return [];
    const validation: Validation<any> = schema.decode(input);
    return IoTsUtils.getPaths(validation);
  });
