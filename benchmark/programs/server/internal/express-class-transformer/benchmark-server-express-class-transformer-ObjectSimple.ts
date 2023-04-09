import { instanceToPlain, plainToInstance } from "class-transformer";

import { ObjectSimple } from "../../../../../test/structures/ObjectSimple";
import { ClassValidatorObjectSimple } from "../../../../structures/class-validator/ClassValidatorObjectSimple";
import { createExpressServerBenchmarkProgram } from "../createExpressServerBenchmarkProgram";

createExpressServerBenchmarkProgram<ObjectSimple>(
    (input) => JSON.stringify(
        input.map((elem) => instanceToPlain(
            plainToInstance(ClassValidatorObjectSimple, elem),
        )),
    ),
);