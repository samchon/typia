import { instanceToPlain, plainToInstance } from "class-transformer";

import { ClassValidatorCollection } from "../../../../structures/class-validator/ClassValidatorCollection";
import { ClassValidatorObjectRecursive } from "../../../../structures/class-validator/ClassValidatorObjectRecursive";
import { ObjectRecursive } from "../../../../structures/pure/ObjectRecursive";
import { createFastifyCustomServerStringifyBenchmarkProgram } from "../createFastifyCustomServerStringifyBenchmarkProgram";

const schema = ClassValidatorCollection(ClassValidatorObjectRecursive);
createFastifyCustomServerStringifyBenchmarkProgram<ObjectRecursive>((input) =>
  JSON.stringify(instanceToPlain(plainToInstance(schema, input))),
);
