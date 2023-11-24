import { instanceToPlain, plainToInstance } from "class-transformer";

import { ClassValidatorCollection } from "../../../../structures/class-validator/ClassValidatorCollection";
import { ClassValidatorObjectSimple } from "../../../../structures/class-validator/ClassValidatorObjectSimple";
import { ObjectSimple } from "../../../../structures/pure/ObjectSimple";
import { createFastifyCustomServerStringifyBenchmarkProgram } from "../createFastifyCustomServerStringifyBenchmarkProgram";

const schema = ClassValidatorCollection(ClassValidatorObjectSimple);
createFastifyCustomServerStringifyBenchmarkProgram<ObjectSimple>((input) =>
  JSON.stringify(instanceToPlain(plainToInstance(schema, input))),
);
