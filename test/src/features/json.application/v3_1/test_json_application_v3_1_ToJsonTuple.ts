import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ToJsonTuple } from "../../../structures/ToJsonTuple";

export const test_json_application_v3_1_ToJsonTuple = _test_json_application({
  version: "3.1",
  name: "ToJsonTuple",
})(typia.json.application<[ToJsonTuple], "3.1">());
