import typia from "typia";

import { ObjectHierarchical } from "../../../../test/structures/ObjectHierarchical";
import { createAssertAjvBenchmarkProgram } from "./createAssertAjvBenchmarkProgram";

createAssertAjvBenchmarkProgram(
    typia.application<[ObjectHierarchical], "ajv">(),
);
