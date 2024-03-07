import typia from "typia";
import { ToJsonArray } from "../../../structures/ToJsonArray";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_surplus_ToJsonArray =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ToJsonArray",
  })(typia.json.application<[ToJsonArray], "ajv", true>());
