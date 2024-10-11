import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ToJsonNull } from "../../../structures/ToJsonNull";

export const test_json_schemas_v3_1_ToJsonNull = _test_json_schemas({
  version: "3.1",
  name: "ToJsonNull",
})(typia.json.schemas<[ToJsonNull], "3.1">());
