import { instanceToPlain, plainToInstance } from "class-transformer";

import { ObjectUnionExplicit } from "../../../../../test/structures/ObjectUnionExplicit";
import { ClassValidatorCollection } from "../../../../structures/class-validator/ClassValidatorCollection";
import { ClassValidatorObjectUnionExplicit } from "../../../../structures/class-validator/ClassValidatorObjectUnionExplicit";
import { createExpressServerStringifyBenchmarkProgram } from "../createExpressServerStringifyBenchmarkProgram";

const schema = ClassValidatorCollection(ClassValidatorObjectUnionExplicit);
createExpressServerStringifyBenchmarkProgram<ObjectUnionExplicit>(
    (input) => JSON.stringify(
        instanceToPlain(
            plainToInstance(schema, input),
        ),
    ),
);