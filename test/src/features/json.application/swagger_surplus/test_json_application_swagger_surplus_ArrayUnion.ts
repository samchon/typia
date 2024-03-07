import typia from "typia";
import { ArrayUnion } from "../../../structures/ArrayUnion";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_surplus_ArrayUnion =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ArrayUnion",
  })(typia.json.application<[ArrayUnion], "swagger", true>());
