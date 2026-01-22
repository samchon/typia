import typia from "typia";

import { ObjectSimple } from "../../../structures/pure/ObjectSimple";
import { createStringifyBenchmarkProgram } from "../createStringifyBenchmarkProgram";

createStringifyBenchmarkProgram(typia.json.createIsStringify<ObjectSimple>());
