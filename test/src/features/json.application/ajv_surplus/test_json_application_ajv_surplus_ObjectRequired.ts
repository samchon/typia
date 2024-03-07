import typia from "typia";
import { ObjectRequired } from "../../../structures/ObjectRequired";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_surplus_ObjectRequired =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ObjectRequired",
  })(typia.json.application<[ObjectRequired], "ajv", true>());
