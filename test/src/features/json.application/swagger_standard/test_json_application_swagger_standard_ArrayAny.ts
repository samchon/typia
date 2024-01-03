import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayAny } from "../../../structures/ArrayAny";

export const test_json_application_swagger_standard_ArrayAny =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ArrayAny",
  })(typia.json.application<[ArrayAny], "swagger", false>());
