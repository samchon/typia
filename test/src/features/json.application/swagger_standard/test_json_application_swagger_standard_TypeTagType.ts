import typia from "typia";
import { TypeTagType } from "../../../structures/TypeTagType";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_standard_TypeTagType =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "TypeTagType",
  })(typia.json.application<[TypeTagType], "swagger", false>());
