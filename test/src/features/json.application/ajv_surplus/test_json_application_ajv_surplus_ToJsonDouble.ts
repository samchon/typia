import typia from "typia";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_surplus_ToJsonDouble =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ToJsonDouble",
  })(typia.json.application<[ToJsonDouble], "ajv", true>());
