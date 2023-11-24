import { instanceToPlain, plainToInstance } from "class-transformer";
import { validateSync } from "class-validator";

import { ClassValidatorCollection } from "../../../../structures/class-validator/ClassValidatorCollection";
import { ClassValidatorObjectUnionExplicit } from "../../../../structures/class-validator/ClassValidatorObjectUnionExplicit";
import { ObjectUnionExplicit } from "../../../../structures/pure/ObjectUnionExplicit";
import { createExpressServerAssertBenchmarkProgram } from "../createExpressServerAssertBenchmarkProgram";

const schema = ClassValidatorCollection(ClassValidatorObjectUnionExplicit);
createExpressServerAssertBenchmarkProgram<ObjectUnionExplicit>((input) => {
  const output = plainToInstance(schema, input);
  const result = validateSync(output);
  if (result.length > 0) throw new Error(result[0].toString());
  return output;
});
