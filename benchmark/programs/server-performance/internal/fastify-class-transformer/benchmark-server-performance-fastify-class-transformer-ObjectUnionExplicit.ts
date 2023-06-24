import { instanceToPlain, plainToInstance } from "class-transformer";
import { validateSync } from "class-validator";

import { ObjectUnionExplicit } from "../../../../../test/structures/ObjectUnionExplicit";
import { ClassValidatorCollection } from "../../../../structures/class-validator/ClassValidatorCollection";
import { ClassValidatorObjectUnionExplicit } from "../../../../structures/class-validator/ClassValidatorObjectUnionExplicit";
import { createFastifyCustomServerPerformanceBenchmarkProgram } from "../createFastifyCustomServerPerformanceBenchmarkProgram";

const schema = ClassValidatorCollection(ClassValidatorObjectUnionExplicit);
createFastifyCustomServerPerformanceBenchmarkProgram<ObjectUnionExplicit, any>(
    (input) => {
        const output = plainToInstance(schema, input);
        const result = validateSync(output);
        if (result.length > 0)
            throw new Error(result[0].toString());
        return output;
    },
    (input) => JSON.stringify(instanceToPlain(input)),
);