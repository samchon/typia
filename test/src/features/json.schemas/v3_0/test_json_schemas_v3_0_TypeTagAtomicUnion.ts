import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { TypeTagAtomicUnion } from "../../../structures/TypeTagAtomicUnion";

export const test_json_schemas_v3_0_TypeTagAtomicUnion = _test_json_schemas({
  version: "3.0",
  name: "TypeTagAtomicUnion",
})(typia.json.schemas<[TypeTagAtomicUnion], "3.0">());
