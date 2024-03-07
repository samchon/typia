import typia from "typia";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_standard_ObjectLiteralType =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ObjectLiteralType",
  })(typia.json.application<[ObjectLiteralType], "swagger", false>());
