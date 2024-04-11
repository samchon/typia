import typia from "typia";

import { ArraySimple } from "../../../structures/pure/ArraySimple";
import { createStringifyFastBenchmarkProgram } from "./createStringifyFastBenchmarkProgram";

createStringifyFastBenchmarkProgram(typia.json.application<[ArraySimple]>());
