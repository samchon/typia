import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ToJsonTuple } from "../../../structures/ToJsonTuple";

export const test_json_schemas_v3_1_ToJsonTuple = _test_json_schemas({
  version: "3.1",
  name: "ToJsonTuple",
})(typia.json.schemas<[ToJsonTuple], "3.1">());
