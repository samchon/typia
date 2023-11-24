import { instanceToPlain, plainToInstance } from "class-transformer";

import { ClassValidatorArrayRecursive } from "../../../../structures/class-validator/ClassValidatorArrayRecursive";
import { ClassValidatorCollection } from "../../../../structures/class-validator/ClassValidatorCollection";
import { ArrayRecursive } from "../../../../structures/pure/ArrayRecursive";
import { createExpressServerStringifyBenchmarkProgram } from "../createExpressServerStringifyBenchmarkProgram";

const schema = ClassValidatorCollection(ClassValidatorArrayRecursive);
createExpressServerStringifyBenchmarkProgram<ArrayRecursive>((input) =>
  JSON.stringify(instanceToPlain(plainToInstance(schema, input))),
);
