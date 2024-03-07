import typia from "typia";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_surplus_ArrayMatrix =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ArrayMatrix",
  })(typia.json.application<[ArrayMatrix], "swagger", true>());
