import { instanceToPlain, plainToInstance } from "class-transformer";

import { ObjectRecursive } from "../../../../../test/structures/ObjectRecursive";
import { ClassValidatorObjectRecursive } from "../../../../structures/class-validator/ClassValidatorObjectRecursive";
import { createExpressServerBenchmarkProgram } from "../createExpressServerBenchmarkProgram";

createExpressServerBenchmarkProgram<ObjectRecursive>((input) =>
    JSON.stringify(
        input.map((elem) =>
            instanceToPlain(
                plainToInstance(ClassValidatorObjectRecursive, elem),
            ),
        ),
    ),
);
