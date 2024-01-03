import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ToJsonUnion } from "../../../structures/ToJsonUnion";

export const test_json_application_ajv_standard_ToJsonUnion =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ToJsonUnion",
  })(typia.json.application<[ToJsonUnion], "ajv", false>());
