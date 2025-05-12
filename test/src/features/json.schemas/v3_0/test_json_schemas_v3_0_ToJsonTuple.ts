import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ToJsonTuple } from "../../../structures/ToJsonTuple";

export const test_json_schemas_v3_0_ToJsonTuple = _test_json_schemas({
  version: "3.0",
  name: "ToJsonTuple",
})(typia.json.schemas<[ToJsonTuple], "3.0">());
