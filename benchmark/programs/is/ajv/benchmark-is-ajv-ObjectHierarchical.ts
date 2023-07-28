import typia from "typia";

import { ObjectHierarchical } from "../../../../test/structures/ObjectHierarchical";
import { createIsAjvBenchmarkProgram } from "./createIsAjvBenchmarkProgram";

createIsAjvBenchmarkProgram(
    typia.application<[ObjectHierarchical], "ajv">(),
);