import typia from "typia";

import { ObjectUnionImplicit } from "../../../structures/pure/ObjectUnionImplicit";
import { createIsAjvBenchmarkProgram } from "./createIsAjvBenchmarkProgram";

createIsAjvBenchmarkProgram(typia.json.schemas<[ObjectUnionImplicit], "3.0">());
