import { ClassConstructor, plainToInstance } from "class-transformer";
import { validateSync } from "class-validator";

import { ArrayUtil } from "typia/lib/utils/ArrayUtil";

import { createValidateErrorBenchmarkProgram } from "../createValidateErrorBenchmarkProgram";

export const createValidateErrorClassValidatorBenchmarkProgram = <
    Schema extends object,
>(
    schema: ClassConstructor<Schema>,
) =>
    createValidateErrorBenchmarkProgram(
        (input) =>
            ArrayUtil.flat(
                input.map((elem) => {
                    const cla: object = plainToInstance(schema, elem);
                    return validateSync(cla);
                }),
            ),
        (name) => !name.includes("Implicit") && !name.includes("Ultimiate"),
    );
