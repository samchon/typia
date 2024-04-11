import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { DynamicEnumeration } from "../../../structures/DynamicEnumeration";

export const test_json_application_v3_0_DynamicEnumeration =
  _test_json_application({
    version: "3.0",
    name: "DynamicEnumeration",
  })(typia.json.application<[DynamicEnumeration], "3.0">());
