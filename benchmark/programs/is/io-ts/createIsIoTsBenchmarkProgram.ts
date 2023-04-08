import { Mixed } from "io-ts";

import { createIsBenchmarkProgram } from "../createIsBenchmarkProgram";

export const createIsIoTsBenchmarkProgram = <Schema extends Mixed>(
    schema: Schema,
) => createIsBenchmarkProgram((input) => schema.is(input));
