import { instanceToPlain, plainToInstance } from "class-transformer";

import { ArrayRecursive } from "../../../../structures/pure/ArrayRecursive";
import { ClassValidatorCollection } from "../../../../structures/class-validator/ClassValidatorCollection";
import { ClassValidatorArrayRecursive } from "../../../../structures/class-validator/ClassValidatorArrayRecursive";
import { createFastifyCustomServerStringifyBenchmarkProgram } from "../createFastifyCustomServerStringifyBenchmarkProgram";

const schema = ClassValidatorCollection(ClassValidatorArrayRecursive);
createFastifyCustomServerStringifyBenchmarkProgram<ArrayRecursive>((input) =>
  JSON.stringify(instanceToPlain(plainToInstance(schema, input))),
);
