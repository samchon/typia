import { instanceToPlain, plainToInstance } from "class-transformer";

import { ObjectHierarchical } from "../../../../structures/pure/ObjectHierarchical";
import { ClassValidatorCollection } from "../../../../structures/class-validator/ClassValidatorCollection";
import { ClassValidatorObjectHierarchical } from "../../../../structures/class-validator/ClassValidatorObjectHierarchical";
import { createExpressServerStringifyBenchmarkProgram } from "../createExpressServerStringifyBenchmarkProgram";

const schema = ClassValidatorCollection(ClassValidatorObjectHierarchical);
createExpressServerStringifyBenchmarkProgram<ObjectHierarchical>((input) =>
  JSON.stringify(instanceToPlain(plainToInstance(schema, input))),
);
