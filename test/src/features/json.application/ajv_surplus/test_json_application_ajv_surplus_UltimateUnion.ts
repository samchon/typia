import typia from "typia";
import { UltimateUnion } from "../../../structures/UltimateUnion";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_surplus_UltimateUnion =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "UltimateUnion",
  })(typia.json.application<[UltimateUnion], "ajv", true>());
