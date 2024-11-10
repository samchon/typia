import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";

export const test_json_schemas_v3_1_ConstantAtomicUnion = _test_json_schemas({
  version: "3.1",
  name: "ConstantAtomicUnion",
})(typia.json.schemas<[ConstantAtomicUnion], "3.1">());
