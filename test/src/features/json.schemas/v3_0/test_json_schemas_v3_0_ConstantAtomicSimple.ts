import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ConstantAtomicSimple } from "../../../structures/ConstantAtomicSimple";

export const test_json_schemas_v3_0_ConstantAtomicSimple = _test_json_schemas({
  version: "3.0",
  name: "ConstantAtomicSimple",
})(typia.json.schemas<[ConstantAtomicSimple], "3.0">());
