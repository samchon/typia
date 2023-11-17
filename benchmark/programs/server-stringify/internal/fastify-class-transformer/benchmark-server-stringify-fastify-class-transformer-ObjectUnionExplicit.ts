import { instanceToPlain, plainToInstance } from "class-transformer";

import { ObjectUnionExplicit } from "../../../../../test/structures/ObjectUnionExplicit";
import { ClassValidatorCollection } from "../../../../structures/class-validator/ClassValidatorCollection";
import { ClassValidatorObjectUnionExplicit } from "../../../../structures/class-validator/ClassValidatorObjectUnionExplicit";
import { createFastifyCustomServerStringifyBenchmarkProgram } from "../createFastifyCustomServerStringifyBenchmarkProgram";

const schema = ClassValidatorCollection(ClassValidatorObjectUnionExplicit);
createFastifyCustomServerStringifyBenchmarkProgram<ObjectUnionExplicit>(
  (input) => JSON.stringify(instanceToPlain(plainToInstance(schema, input))),
);
