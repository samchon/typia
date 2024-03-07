import typia from "typia";
import { ObjectPartialAndRequired } from "../../../structures/ObjectPartialAndRequired";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_surplus_ObjectPartialAndRequired =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ObjectPartialAndRequired",
  })(typia.json.application<[ObjectPartialAndRequired], "ajv", true>());
