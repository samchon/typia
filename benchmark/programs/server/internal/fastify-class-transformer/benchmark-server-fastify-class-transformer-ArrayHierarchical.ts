import { instanceToPlain, plainToInstance } from "class-transformer";

import { ArrayHierarchical } from "../../../../../test/structures/ArrayHierarchical";
import { ClassValidatorArrayHierarchical } from "../../../../structures/class-validator/ClassValidatorArrayHierarchical";
import { createFastifyCustomServerBenchmarkProgram } from "../createFastifyCustomServerBenchmarkProgram";

createFastifyCustomServerBenchmarkProgram<ArrayHierarchical>(
    (input) => JSON.stringify(
        input.map((elem) => instanceToPlain(
            plainToInstance(ClassValidatorArrayHierarchical, elem),
        )),
    ),
);