import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ToJsonAtomicUnion } from "../../../structures/ToJsonAtomicUnion";

export const test_json_schemas_v3_0_ToJsonAtomicUnion = _test_json_schemas({
  version: "3.0",
  name: "ToJsonAtomicUnion",
})(typia.json.schemas<[ToJsonAtomicUnion], "3.0">());
