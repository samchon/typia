import typia from "typia";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_surplus_ObjectLiteralType =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ObjectLiteralType",
  })(typia.json.application<[ObjectLiteralType], "ajv", true>());
