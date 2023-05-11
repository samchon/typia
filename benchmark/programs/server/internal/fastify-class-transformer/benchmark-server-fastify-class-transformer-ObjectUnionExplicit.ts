import { instanceToPlain, plainToInstance } from "class-transformer";

import { ObjectUnionExplicit } from "../../../../../test/structures/ObjectUnionExplicit";
import { ClassValidatorObjectUnionExplicit } from "../../../../structures/class-validator/ClassValidatorObjectUnionExplicit";
import { createFastifyCustomServerBenchmarkProgram } from "../createFastifyCustomServerBenchmarkProgram";

createFastifyCustomServerBenchmarkProgram<ObjectUnionExplicit>(
    (input) => JSON.stringify(
        input.map((elem) => instanceToPlain(
            plainToInstance(ClassValidatorObjectUnionExplicit, elem),
        )),
    ),
);