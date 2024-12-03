import typia from "typia";

import { ObjectHierarchical } from "../../../structures/pure/ObjectHierarchical";
import { createIsAjvBenchmarkProgram } from "./createIsAjvBenchmarkProgram";

createIsAjvBenchmarkProgram(typia.json.schemas<[ObjectHierarchical], "3.0">());
