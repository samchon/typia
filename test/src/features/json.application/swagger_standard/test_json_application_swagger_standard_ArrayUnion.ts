import typia from "typia";
import { ArrayUnion } from "../../../structures/ArrayUnion";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_standard_ArrayUnion =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ArrayUnion",
  })(typia.json.application<[ArrayUnion], "swagger", false>());
