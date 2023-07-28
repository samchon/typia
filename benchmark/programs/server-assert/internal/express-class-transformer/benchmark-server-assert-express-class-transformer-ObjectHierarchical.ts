import { instanceToPlain, plainToInstance } from "class-transformer";
import { validateSync } from "class-validator";

import { ObjectHierarchical } from "../../../../../test/structures/ObjectHierarchical";
import { ClassValidatorCollection } from "../../../../structures/class-validator/ClassValidatorCollection";
import { ClassValidatorObjectHierarchical } from "../../../../structures/class-validator/ClassValidatorObjectHierarchical";
import { createExpressServerAssertBenchmarkProgram } from "../createExpressServerAssertBenchmarkProgram";

const schema = ClassValidatorCollection(ClassValidatorObjectHierarchical);
createExpressServerAssertBenchmarkProgram<ObjectHierarchical>(
    (input) => {
        const output = plainToInstance(schema, input);
        const result = validateSync(output);
        if (result.length > 0)
            throw new Error(result[0].toString());
        return output;
    },
);