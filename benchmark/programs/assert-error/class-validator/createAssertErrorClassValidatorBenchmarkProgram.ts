import { ClassConstructor, plainToInstance } from "class-transformer";
import { validateSync } from "class-validator";

import { ArrayUtil } from "typia/lib/utils/ArrayUtil";

import { createAssertErrorBenchmarkProgram } from "../createAssertErrorBenchmarkProgram";

export const createAssertErrorClassValidatorBenchmarkProgram = <
    Schema extends object,
>(
    schema: ClassConstructor<Schema>,
) =>
    createAssertErrorBenchmarkProgram(
        (input) => {
            const result = ArrayUtil.flat(
                input.map((elem) => {
                    const cla: object = plainToInstance(schema, elem);
                    return validateSync(cla);
                }),
            );
            if (result.length) throw new Error(JSON.stringify(result[0]));
            return input;
        },
        (name) => !name.includes("Implicit") && !name.includes("Ultimiate"),
    );
