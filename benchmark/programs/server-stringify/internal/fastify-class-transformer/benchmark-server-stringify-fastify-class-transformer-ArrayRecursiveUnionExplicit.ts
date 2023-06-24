import { instanceToPlain, plainToInstance } from "class-transformer";

import { ArrayRecursiveUnionExplicit } from "../../../../../test/structures/ArrayRecursiveUnionExplicit";
import { ClassValidatorCollection } from "../../../../structures/class-validator/ClassValidatorCollection";
import { ClassValidatorArrayRecursiveUnionExplicit } from "../../../../structures/class-validator/ClassValidatorArrayRecursiveUnionExplicit";
import { createFastifyCustomServerStringifyBenchmarkProgram } from "../createFastifyCustomServerStringifyBenchmarkProgram";

const schema = ClassValidatorCollection(ClassValidatorArrayRecursiveUnionExplicit);
createFastifyCustomServerStringifyBenchmarkProgram<ArrayRecursiveUnionExplicit>(
    (input) => JSON.stringify(
        instanceToPlain(
            plainToInstance(schema, input),
        ),
    ),
);