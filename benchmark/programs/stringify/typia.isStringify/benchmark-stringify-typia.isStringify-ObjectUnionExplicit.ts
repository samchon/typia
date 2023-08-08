import typia from "typia";

import { ObjectUnionExplicit } from "../../../../test/structures/ObjectUnionExplicit";
import { createStringifyBenchmarkProgram } from "../createStringifyBenchmarkProgram";

createStringifyBenchmarkProgram(typia.createIsStringify<ObjectUnionExplicit>());
