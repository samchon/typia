import typia from "typia";

import { ObjectRecursive } from "../../../../test/structures/ObjectRecursive";
import { createIsAjvBenchmarkProgram } from "./createIsAjvBenchmarkProgram";

createIsAjvBenchmarkProgram(typia.json.application<[ObjectRecursive], "ajv">());
