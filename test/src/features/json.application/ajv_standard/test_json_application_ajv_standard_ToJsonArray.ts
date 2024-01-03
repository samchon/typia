import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ToJsonArray } from "../../../structures/ToJsonArray";

export const test_json_application_ajv_standard_ToJsonArray =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ToJsonArray",
  })(typia.json.application<[ToJsonArray], "ajv", false>());
