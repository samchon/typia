import { instanceToPlain, plainToInstance } from "class-transformer";

import { ObjectSimple } from "../../../../../test/structures/ObjectSimple";
import { ClassValidatorObjectSimple } from "../../../../structures/class-validator/ClassValidatorObjectSimple";
import { createFastifyCustomServerBenchmarkProgram } from "../createFastifyCustomServerBenchmarkProgram";

createFastifyCustomServerBenchmarkProgram<ObjectSimple>(
    (input) => JSON.stringify(
        input.map((elem) => instanceToPlain(
            plainToInstance(ClassValidatorObjectSimple, elem),
        )),
    ),
);