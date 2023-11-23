import { instanceToPlain, plainToInstance } from "class-transformer";

import { ArraySimple } from "../../../../../test/structures/ArraySimple";
import { ClassValidatorArraySimple } from "../../../../structures/class-validator/ClassValidatorArraySimple";
import { ClassValidatorCollection } from "../../../../structures/class-validator/ClassValidatorCollection";
import { createExpressServerStringifyBenchmarkProgram } from "../createExpressServerStringifyBenchmarkProgram";

const schema = ClassValidatorCollection(ClassValidatorArraySimple);
createExpressServerStringifyBenchmarkProgram<ArraySimple>((input) =>
  JSON.stringify(instanceToPlain(plainToInstance(schema, input))),
);
