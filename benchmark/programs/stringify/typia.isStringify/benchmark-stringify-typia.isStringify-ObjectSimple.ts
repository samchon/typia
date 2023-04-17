import typia from "typia";

import { ObjectSimple } from "../../../../test/structures/ObjectSimple";
import { createStringifyBenchmarkProgram } from "../createStringifyBenchmarkProgram";

createStringifyBenchmarkProgram(typia.createIsStringify<ObjectSimple>());
