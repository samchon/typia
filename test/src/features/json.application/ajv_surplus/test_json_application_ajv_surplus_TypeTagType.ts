import typia from "typia";
import { TypeTagType } from "../../../structures/TypeTagType";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_surplus_TypeTagType =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "TypeTagType",
  })(typia.json.application<[TypeTagType], "ajv", true>());
