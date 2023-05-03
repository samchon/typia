import { instanceToPlain, plainToInstance } from "class-transformer";

import { ArrayRecursive } from "../../../../../test/structures/ArrayRecursive";
import { ClassValidatorArrayRecursive } from "../../../../structures/class-validator/ClassValidatorArrayRecursive";
import { createExpressServerBenchmarkProgram } from "../createExpressServerBenchmarkProgram";

createExpressServerBenchmarkProgram<ArrayRecursive>((input) =>
    JSON.stringify(
        input.map((elem) =>
            instanceToPlain(
                plainToInstance(ClassValidatorArrayRecursive, elem),
            ),
        ),
    ),
);
