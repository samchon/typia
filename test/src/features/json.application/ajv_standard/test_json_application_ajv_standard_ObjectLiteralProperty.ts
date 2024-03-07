import typia from "typia";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_standard_ObjectLiteralProperty =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ObjectLiteralProperty",
  })(typia.json.application<[ObjectLiteralProperty], "ajv", false>());
