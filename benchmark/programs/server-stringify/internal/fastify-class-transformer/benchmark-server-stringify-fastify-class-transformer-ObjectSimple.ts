import { instanceToPlain, plainToInstance } from "class-transformer";

import { ObjectSimple } from "../../../../../test/structures/ObjectSimple";
import { ClassValidatorCollection } from "../../../../structures/class-validator/ClassValidatorCollection";
import { ClassValidatorObjectSimple } from "../../../../structures/class-validator/ClassValidatorObjectSimple";
import { createFastifyCustomServerStringifyBenchmarkProgram } from "../createFastifyCustomServerStringifyBenchmarkProgram";

const schema = ClassValidatorCollection(ClassValidatorObjectSimple);
createFastifyCustomServerStringifyBenchmarkProgram<ObjectSimple>((input) =>
    JSON.stringify(instanceToPlain(plainToInstance(schema, input))),
);
