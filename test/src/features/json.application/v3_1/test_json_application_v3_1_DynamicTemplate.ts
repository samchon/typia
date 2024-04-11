import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";

export const test_json_application_v3_1_DynamicTemplate =
  _test_json_application({
    version: "3.1",
    name: "DynamicTemplate",
  })(typia.json.application<[DynamicTemplate], "3.1">());
