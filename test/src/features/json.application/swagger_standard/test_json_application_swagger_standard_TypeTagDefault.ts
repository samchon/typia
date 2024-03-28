import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagDefault } from "../../../structures/TypeTagDefault";

export const test_json_application_swagger_standard_TypeTagDefault =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "TypeTagDefault",
  })(typia.json.application<[TypeTagDefault], "swagger", false>());
