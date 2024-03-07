import typia from "typia";
import { ConstantIntersection } from "../../../structures/ConstantIntersection";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_surplus_ConstantIntersection =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ConstantIntersection",
  })(typia.json.application<[ConstantIntersection], "ajv", true>());
