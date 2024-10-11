import typia from "typia";

import { ObjectSimple } from "../../../structures/pure/ObjectSimple";
import { createIsAjvBenchmarkProgram } from "./createIsAjvBenchmarkProgram";

createIsAjvBenchmarkProgram(typia.json.schemas<[ObjectSimple], "3.0">());
