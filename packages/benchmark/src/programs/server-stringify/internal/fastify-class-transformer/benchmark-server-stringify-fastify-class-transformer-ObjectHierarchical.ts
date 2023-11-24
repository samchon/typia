import { instanceToPlain, plainToInstance } from "class-transformer";

import { ClassValidatorCollection } from "../../../../structures/class-validator/ClassValidatorCollection";
import { ClassValidatorObjectHierarchical } from "../../../../structures/class-validator/ClassValidatorObjectHierarchical";
import { ObjectHierarchical } from "../../../../structures/pure/ObjectHierarchical";
import { createFastifyCustomServerStringifyBenchmarkProgram } from "../createFastifyCustomServerStringifyBenchmarkProgram";

const schema = ClassValidatorCollection(ClassValidatorObjectHierarchical);
createFastifyCustomServerStringifyBenchmarkProgram<ObjectHierarchical>(
  (input) => JSON.stringify(instanceToPlain(plainToInstance(schema, input))),
);
