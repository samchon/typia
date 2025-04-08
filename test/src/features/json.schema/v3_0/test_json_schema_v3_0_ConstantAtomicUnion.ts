import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";

export const test_json_schema_v3_0_ConstantAtomicUnion = _test_json_schema({
  version: "3.0",
  name: "ConstantAtomicUnion",
})(typia.json.schema<ConstantAtomicUnion, "3.0">());
