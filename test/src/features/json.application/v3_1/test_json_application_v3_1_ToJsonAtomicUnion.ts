import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ToJsonAtomicUnion } from "../../../structures/ToJsonAtomicUnion";

export const test_json_application_v3_1_ToJsonAtomicUnion =
  _test_json_application({
    version: "3.1",
    name: "ToJsonAtomicUnion",
  })(typia.json.application<[ToJsonAtomicUnion], "3.1">());
