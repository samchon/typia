import { instanceToPlain, plainToInstance } from "class-transformer";

import { ArrayRecursiveUnionExplicit } from "../../../../../test/structures/ArrayRecursiveUnionExplicit";
import { ClassValidatorArrayRecursiveUnionExplicit } from "../../../../structures/class-validator/ClassValidatorArrayRecursiveUnionExplicit";
import { ClassValidatorCollection } from "../../../../structures/class-validator/ClassValidatorCollection";
import { createFastifyCustomServerStringifyBenchmarkProgram } from "../createFastifyCustomServerStringifyBenchmarkProgram";

const schema = ClassValidatorCollection(
    ClassValidatorArrayRecursiveUnionExplicit,
);
createFastifyCustomServerStringifyBenchmarkProgram<ArrayRecursiveUnionExplicit>(
    (input) => JSON.stringify(instanceToPlain(plainToInstance(schema, input))),
);
