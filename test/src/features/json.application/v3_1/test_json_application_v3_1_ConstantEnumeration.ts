import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";

export const test_json_application_v3_1_ConstantEnumeration =
  _test_json_application({
    version: "3.1",
    name: "ConstantEnumeration",
  })(typia.json.application<[ConstantEnumeration], "3.1">());
