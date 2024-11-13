import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ConstantAtomicWrapper } from "../../../structures/ConstantAtomicWrapper";

export const test_json_schemas_v3_0_ConstantAtomicWrapper = _test_json_schemas({
  version: "3.0",
  name: "ConstantAtomicWrapper",
})(typia.json.schemas<[ConstantAtomicWrapper], "3.0">());
