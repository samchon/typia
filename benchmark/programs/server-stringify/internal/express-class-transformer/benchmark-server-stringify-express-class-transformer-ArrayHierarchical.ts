import { instanceToPlain, plainToInstance } from "class-transformer";

import { ArrayHierarchical } from "../../../../../test/structures/ArrayHierarchical";
import { ClassValidatorArrayHierarchical } from "../../../../structures/class-validator/ClassValidatorArrayHierarchical";
import { ClassValidatorCollection } from "../../../../structures/class-validator/ClassValidatorCollection";
import { createExpressServerStringifyBenchmarkProgram } from "../createExpressServerStringifyBenchmarkProgram";

const schema = ClassValidatorCollection(ClassValidatorArrayHierarchical);
createExpressServerStringifyBenchmarkProgram<ArrayHierarchical>((input) =>
  JSON.stringify(instanceToPlain(plainToInstance(schema, input))),
);
