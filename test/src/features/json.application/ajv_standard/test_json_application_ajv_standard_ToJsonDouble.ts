import typia from "typia";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_standard_ToJsonDouble =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ToJsonDouble",
  })(typia.json.application<[ToJsonDouble], "ajv", false>());
