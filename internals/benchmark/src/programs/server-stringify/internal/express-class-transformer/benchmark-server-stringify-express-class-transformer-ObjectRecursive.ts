import { instanceToPlain, plainToInstance } from "class-transformer";

import { ObjectRecursive } from "../../../../structures/pure/ObjectRecursive";
import { ClassValidatorCollection } from "../../../../structures/class-validator/ClassValidatorCollection";
import { ClassValidatorObjectRecursive } from "../../../../structures/class-validator/ClassValidatorObjectRecursive";
import { createExpressServerStringifyBenchmarkProgram } from "../createExpressServerStringifyBenchmarkProgram";

const schema = ClassValidatorCollection(ClassValidatorObjectRecursive);
createExpressServerStringifyBenchmarkProgram<ObjectRecursive>((input) =>
  JSON.stringify(instanceToPlain(plainToInstance(schema, input))),
);
