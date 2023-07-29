import { instanceToPlain, plainToInstance } from "class-transformer";

import { ObjectRecursive } from "../../../../../test/structures/ObjectRecursive";
import { ClassValidatorCollection } from "../../../../structures/class-validator/ClassValidatorCollection";
import { ClassValidatorObjectRecursive } from "../../../../structures/class-validator/ClassValidatorObjectRecursive";
import { createFastifyCustomServerStringifyBenchmarkProgram } from "../createFastifyCustomServerStringifyBenchmarkProgram";

const schema = ClassValidatorCollection(ClassValidatorObjectRecursive);
createFastifyCustomServerStringifyBenchmarkProgram<ObjectRecursive>((input) =>
    JSON.stringify(instanceToPlain(plainToInstance(schema, input))),
);
