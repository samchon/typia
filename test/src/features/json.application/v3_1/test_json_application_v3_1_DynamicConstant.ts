import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_json_application_v3_1_DynamicConstant =
  _test_json_application({
    version: "3.1",
    name: "DynamicConstant",
  })(typia.json.application<[DynamicConstant], "3.1">());
