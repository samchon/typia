import { instanceToPlain, plainToInstance } from "class-transformer";
import { validateSync } from "class-validator";

import { ObjectRecursive } from "../../../../../test/structures/ObjectRecursive";
import { ClassValidatorCollection } from "../../../../structures/class-validator/ClassValidatorCollection";
import { ClassValidatorObjectRecursive } from "../../../../structures/class-validator/ClassValidatorObjectRecursive";
import { createExpressServerPerformanceBenchmarkProgram } from "../createExpressServerPerformanceBenchmarkProgram";

const schema = ClassValidatorCollection(ClassValidatorObjectRecursive);
createExpressServerPerformanceBenchmarkProgram<ObjectRecursive, any>(
    (input) => {
        const output = plainToInstance(schema, input);
        const result = validateSync(output);
        if (result.length > 0)
            throw new Error(result[0].toString());
        return output;
    },
    (input) => JSON.stringify(instanceToPlain(schema)),
);