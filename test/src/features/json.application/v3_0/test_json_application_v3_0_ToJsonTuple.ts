import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ToJsonTuple } from "../../../structures/ToJsonTuple";

export const test_json_application_v3_0_ToJsonTuple = _test_json_application({
  version: "3.0",
  name: "ToJsonTuple",
})(typia.json.application<[ToJsonTuple], "3.0">());
