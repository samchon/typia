import { TSchema } from "@sinclair/typebox";
import Ajv from "ajv";

import { createOptimizerBenchmarkProgram } from "../createOptimizerBenchmarkProgram";

export const createOptimizerAjvBenchmarkProgram = <T extends TSchema>(
  schema: T,
) =>
  createOptimizerBenchmarkProgram((input: unknown) => {
    const ajv = new Ajv();
    const validate = ajv.compile(schema);
    return validate(input) as boolean;
  });
