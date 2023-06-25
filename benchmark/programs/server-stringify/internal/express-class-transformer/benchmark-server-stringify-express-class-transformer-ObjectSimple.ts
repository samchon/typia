import { instanceToPlain, plainToInstance } from "class-transformer";

import { ObjectSimple } from "../../../../../test/structures/ObjectSimple";
import { ClassValidatorCollection } from "../../../../structures/class-validator/ClassValidatorCollection";
import { ClassValidatorObjectSimple } from "../../../../structures/class-validator/ClassValidatorObjectSimple";
import { createExpressServerStringifyBenchmarkProgram } from "../createExpressServerStringifyBenchmarkProgram";

const schema = ClassValidatorCollection(ClassValidatorObjectSimple);
createExpressServerStringifyBenchmarkProgram<ObjectSimple>(
    (input) => JSON.stringify(
        instanceToPlain(
            plainToInstance(schema, input),
        ),
    ),
);