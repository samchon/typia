import { instanceToPlain, plainToInstance } from "class-transformer";

import { ClassValidatorCollection } from "../../../../structures/class-validator/ClassValidatorCollection";
import { ClassValidatorObjectSimple } from "../../../../structures/class-validator/ClassValidatorObjectSimple";
import { ObjectSimple } from "../../../../structures/pure/ObjectSimple";
import { createExpressServerStringifyBenchmarkProgram } from "../createExpressServerStringifyBenchmarkProgram";

const schema = ClassValidatorCollection(ClassValidatorObjectSimple);
createExpressServerStringifyBenchmarkProgram<ObjectSimple>((input) =>
  JSON.stringify(instanceToPlain(plainToInstance(schema, input))),
);
