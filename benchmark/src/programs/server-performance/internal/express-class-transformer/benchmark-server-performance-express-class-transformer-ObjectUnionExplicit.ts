import { instanceToPlain, plainToInstance } from "class-transformer";
import { validateSync } from "class-validator";

import { ClassValidatorCollection } from "../../../../structures/class-validator/ClassValidatorCollection";
import { ClassValidatorObjectUnionExplicit } from "../../../../structures/class-validator/ClassValidatorObjectUnionExplicit";
import { ObjectUnionExplicit } from "../../../../structures/pure/ObjectUnionExplicit";
import { createExpressServerPerformanceBenchmarkProgram } from "../createExpressServerPerformanceBenchmarkProgram";

const schema = ClassValidatorCollection(ClassValidatorObjectUnionExplicit);
createExpressServerPerformanceBenchmarkProgram<ObjectUnionExplicit, any>(
  (input) => {
    const output = plainToInstance(schema, input);
    const result = validateSync(output);
    if (result.length > 0) throw new Error(result[0].toString());
    return output;
  },
  (input) => JSON.stringify(instanceToPlain(schema)),
);
