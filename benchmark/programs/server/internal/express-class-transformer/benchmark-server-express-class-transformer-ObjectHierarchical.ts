import { instanceToPlain, plainToInstance } from "class-transformer";

import { ObjectHierarchical } from "../../../../../test/structures/ObjectHierarchical";
import { ClassValidatorObjectHierarchical } from "../../../../structures/class-validator/ClassValidatorObjectHierarchical";
import { createExpressServerBenchmarkProgram } from "../createExpressServerBenchmarkProgram";

createExpressServerBenchmarkProgram<ObjectHierarchical>(
    (input) => JSON.stringify(
        input.map((elem) => instanceToPlain(
            plainToInstance(ClassValidatorObjectHierarchical, elem),
        )),
    ),
);