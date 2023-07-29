import { instanceToPlain, plainToInstance } from "class-transformer";
import { validateSync } from "class-validator";

import { ArraySimple } from "../../../../../test/structures/ArraySimple";
import { ClassValidatorArraySimple } from "../../../../structures/class-validator/ClassValidatorArraySimple";
import { ClassValidatorCollection } from "../../../../structures/class-validator/ClassValidatorCollection";
import { createExpressServerPerformanceBenchmarkProgram } from "../createExpressServerPerformanceBenchmarkProgram";

const schema = ClassValidatorCollection(ClassValidatorArraySimple);
createExpressServerPerformanceBenchmarkProgram<ArraySimple, any>(
    (input) => {
        const output = plainToInstance(schema, input);
        const result = validateSync(output);
        if (result.length > 0) throw new Error(result[0].toString());
        return output;
    },
    (input) => JSON.stringify(instanceToPlain(schema)),
);
