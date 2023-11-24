import typia from "typia";

import { ArraySimple } from "../../../structures/pure/ArraySimple";
import { createStringifyBenchmarkProgram } from "../createStringifyBenchmarkProgram";

createStringifyBenchmarkProgram(typia.json.createIsStringify<ArraySimple>());
