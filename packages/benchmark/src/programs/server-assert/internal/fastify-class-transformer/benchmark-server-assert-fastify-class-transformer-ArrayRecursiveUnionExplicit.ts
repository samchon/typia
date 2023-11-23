import { instanceToPlain, plainToInstance } from "class-transformer";
import { validateSync } from "class-validator";

import { ArrayRecursiveUnionExplicit } from "../../../../../test/structures/ArrayRecursiveUnionExplicit";
import { ClassValidatorArrayRecursiveUnionExplicit } from "../../../../structures/class-validator/ClassValidatorArrayRecursiveUnionExplicit";
import { ClassValidatorCollection } from "../../../../structures/class-validator/ClassValidatorCollection";
import { createFastifyCustomServerAssertBenchmarkProgram } from "../createFastifyCustomServerAssertBenchmarkProgram";

const schema = ClassValidatorCollection(
  ClassValidatorArrayRecursiveUnionExplicit,
);
createFastifyCustomServerAssertBenchmarkProgram<ArrayRecursiveUnionExplicit>(
  (input) => {
    const output = plainToInstance(schema, input);
    const result = validateSync(output);
    if (result.length > 0) throw new Error(result[0].toString());
    return output;
  },
);
