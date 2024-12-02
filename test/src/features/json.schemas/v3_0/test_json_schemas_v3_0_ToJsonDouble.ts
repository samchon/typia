import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";

export const test_json_schemas_v3_0_ToJsonDouble = _test_json_schemas({
  version: "3.0",
  name: "ToJsonDouble",
})(typia.json.schemas<[ToJsonDouble], "3.0">());
