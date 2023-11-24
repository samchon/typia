import { instanceToPlain, plainToInstance } from "class-transformer";

import { ClassValidatorArraySimple } from "../../../../structures/class-validator/ClassValidatorArraySimple";
import { ClassValidatorCollection } from "../../../../structures/class-validator/ClassValidatorCollection";
import { ArraySimple } from "../../../../structures/pure/ArraySimple";
import { createExpressServerStringifyBenchmarkProgram } from "../createExpressServerStringifyBenchmarkProgram";

const schema = ClassValidatorCollection(ClassValidatorArraySimple);
createExpressServerStringifyBenchmarkProgram<ArraySimple>((input) =>
  JSON.stringify(instanceToPlain(plainToInstance(schema, input))),
);
