import { instanceToPlain, plainToInstance } from "class-transformer";

import { ArraySimple } from "../../../../structures/pure/ArraySimple";
import { ClassValidatorCollection } from "../../../../structures/class-validator/ClassValidatorCollection";
import { ClassValidatorArraySimple } from "../../../../structures/class-validator/ClassValidatorArraySimple";
import { createFastifyCustomServerStringifyBenchmarkProgram } from "../createFastifyCustomServerStringifyBenchmarkProgram";

const schema = ClassValidatorCollection(ClassValidatorArraySimple);
createFastifyCustomServerStringifyBenchmarkProgram<ArraySimple>((input) =>
  JSON.stringify(instanceToPlain(plainToInstance(schema, input))),
);
