import { instanceToPlain, plainToInstance } from "class-transformer";

import { ArraySimple } from "../../../../../test/structures/ArraySimple";
import { ClassValidatorArraySimple } from "../../../../structures/class-validator/ClassValidatorArraySimple";
import { createExpressServerBenchmarkProgram } from "../createExpressServerBenchmarkProgram";

createExpressServerBenchmarkProgram<ArraySimple>((input) =>
    JSON.stringify(
        input.map((elem) =>
            instanceToPlain(plainToInstance(ClassValidatorArraySimple, elem)),
        ),
    ),
);
