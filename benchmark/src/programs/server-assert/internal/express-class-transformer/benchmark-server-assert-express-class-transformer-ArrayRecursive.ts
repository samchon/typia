import { instanceToPlain, plainToInstance } from "class-transformer";
import { validateSync } from "class-validator";

import { ClassValidatorArrayRecursive } from "../../../../structures/class-validator/ClassValidatorArrayRecursive";
import { ClassValidatorCollection } from "../../../../structures/class-validator/ClassValidatorCollection";
import { ArrayRecursive } from "../../../../structures/pure/ArrayRecursive";
import { createExpressServerAssertBenchmarkProgram } from "../createExpressServerAssertBenchmarkProgram";

const schema = ClassValidatorCollection(ClassValidatorArrayRecursive);
createExpressServerAssertBenchmarkProgram<ArrayRecursive>((input) => {
  const output = plainToInstance(schema, input);
  const result = validateSync(output);
  if (result.length > 0) throw new Error(result[0].toString());
  return output;
});
