import { instanceToPlain, plainToInstance } from "class-transformer";

import { ClassValidatorCollection } from "../../../../structures/class-validator/ClassValidatorCollection";
import { ClassValidatorObjectUnionExplicit } from "../../../../structures/class-validator/ClassValidatorObjectUnionExplicit";
import { ObjectUnionExplicit } from "../../../../structures/pure/ObjectUnionExplicit";
import { createExpressServerStringifyBenchmarkProgram } from "../createExpressServerStringifyBenchmarkProgram";

const schema = ClassValidatorCollection(ClassValidatorObjectUnionExplicit);
createExpressServerStringifyBenchmarkProgram<ObjectUnionExplicit>((input) =>
  JSON.stringify(instanceToPlain(plainToInstance(schema, input))),
);
