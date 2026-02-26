import { instanceToPlain, plainToInstance } from "class-transformer";
import { validateSync } from "class-validator";

import { ArrayRecursiveUnionExplicit } from "../../../../structures/pure/ArrayRecursiveUnionExplicit";
import { ClassValidatorCollection } from "../../../../structures/class-validator/ClassValidatorCollection";
import { ClassValidatorArrayRecursiveUnionExplicit } from "../../../../structures/class-validator/ClassValidatorArrayRecursiveUnionExplicit";
import { createExpressServerPerformanceBenchmarkProgram } from "../createExpressServerPerformanceBenchmarkProgram";

const schema = ClassValidatorCollection(
  ClassValidatorArrayRecursiveUnionExplicit,
);
createExpressServerPerformanceBenchmarkProgram<
  ArrayRecursiveUnionExplicit,
  any
>(
  (input) => {
    const output = plainToInstance(schema, input);
    const result = validateSync(output);
    if (result.length > 0) throw new Error(result[0].toString());
    return output;
  },
  (input) => JSON.stringify(instanceToPlain(schema)),
);
