import { instanceToPlain, plainToInstance } from "class-transformer";

import { ObjectUnionExplicit } from "../../../../../test/structures/ObjectUnionExplicit";
import { ClassValidatorObjectUnionExplicit } from "../../../../structures/class-validator/ClassValidatorObjectUnionExplicit";
import { createExpressServerBenchmarkProgram } from "../createExpressServerBenchmarkProgram";

createExpressServerBenchmarkProgram<ObjectUnionExplicit>((input) =>
    JSON.stringify(
        input.map((elem) =>
            instanceToPlain(
                plainToInstance(ClassValidatorObjectUnionExplicit, elem),
            ),
        ),
    ),
);
