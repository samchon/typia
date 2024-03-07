import typia from "typia";
import { ArrayAny } from "../../../structures/ArrayAny";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_standard_ArrayAny =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ArrayAny",
  })(typia.json.application<[ArrayAny], "swagger", false>());
