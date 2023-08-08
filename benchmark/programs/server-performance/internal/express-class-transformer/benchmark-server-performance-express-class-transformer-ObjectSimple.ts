import { instanceToPlain, plainToInstance } from "class-transformer";
import { validateSync } from "class-validator";

import { ObjectSimple } from "../../../../../test/structures/ObjectSimple";
import { ClassValidatorCollection } from "../../../../structures/class-validator/ClassValidatorCollection";
import { ClassValidatorObjectSimple } from "../../../../structures/class-validator/ClassValidatorObjectSimple";
import { createExpressServerPerformanceBenchmarkProgram } from "../createExpressServerPerformanceBenchmarkProgram";

const schema = ClassValidatorCollection(ClassValidatorObjectSimple);
createExpressServerPerformanceBenchmarkProgram<ObjectSimple, any>(
    (input) => {
        const output = plainToInstance(schema, input);
        const result = validateSync(output);
        if (result.length > 0) throw new Error(result[0].toString());
        return output;
    },
    (input) => JSON.stringify(instanceToPlain(schema)),
);
