import typia from "typia";
import { ToJsonUnion } from "../../../structures/ToJsonUnion";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_surplus_ToJsonUnion =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ToJsonUnion",
  })(typia.json.application<[ToJsonUnion], "ajv", true>());
