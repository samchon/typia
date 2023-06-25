import { instanceToPlain, plainToInstance } from "class-transformer";

import { ArrayRecursive } from "../../../../../test/structures/ArrayRecursive";
import { ClassValidatorCollection } from "../../../../structures/class-validator/ClassValidatorCollection";
import { ClassValidatorArrayRecursive } from "../../../../structures/class-validator/ClassValidatorArrayRecursive";
import { createExpressServerStringifyBenchmarkProgram } from "../createExpressServerStringifyBenchmarkProgram";

const schema = ClassValidatorCollection(ClassValidatorArrayRecursive);
createExpressServerStringifyBenchmarkProgram<ArrayRecursive>(
    (input) => JSON.stringify(
        instanceToPlain(
            plainToInstance(schema, input),
        ),
    ),
);