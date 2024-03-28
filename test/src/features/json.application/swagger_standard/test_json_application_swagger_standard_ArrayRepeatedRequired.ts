import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayRepeatedRequired } from "../../../structures/ArrayRepeatedRequired";

export const test_json_application_swagger_standard_ArrayRepeatedRequired =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ArrayRepeatedRequired",
  })(typia.json.application<[ArrayRepeatedRequired], "swagger", false>());
