import { instanceToPlain, plainToInstance } from "class-transformer";

import { ArrayRecursiveUnionExplicit } from "../../../../structures/pure/ArrayRecursiveUnionExplicit";
import { ClassValidatorCollection } from "../../../../structures/class-validator/ClassValidatorCollection";
import { ClassValidatorArrayRecursiveUnionExplicit } from "../../../../structures/class-validator/ClassValidatorArrayRecursiveUnionExplicit";
import { createExpressServerStringifyBenchmarkProgram } from "../createExpressServerStringifyBenchmarkProgram";

const schema = ClassValidatorCollection(
  ClassValidatorArrayRecursiveUnionExplicit,
);
createExpressServerStringifyBenchmarkProgram<ArrayRecursiveUnionExplicit>(
  (input) => JSON.stringify(instanceToPlain(plainToInstance(schema, input))),
);
