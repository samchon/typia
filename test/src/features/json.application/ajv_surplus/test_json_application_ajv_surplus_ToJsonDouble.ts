import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";

export const test_json_application_ajv_surplus_ToJsonDouble =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ToJsonDouble",
  })(typia.json.application<[ToJsonDouble], "ajv", true>());
