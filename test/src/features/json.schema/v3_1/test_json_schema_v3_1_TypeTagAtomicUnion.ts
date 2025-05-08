import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { TypeTagAtomicUnion } from "../../../structures/TypeTagAtomicUnion";

export const test_json_schema_v3_1_TypeTagAtomicUnion = _test_json_schema({
  version: "3.1",
  name: "TypeTagAtomicUnion",
})(typia.json.schema<TypeTagAtomicUnion, "3.1">());
