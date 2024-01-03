import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagObjectUnion } from "../../../structures/TypeTagObjectUnion";

export const test_json_application_swagger_standard_TypeTagObjectUnion =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "TypeTagObjectUnion",
  })(typia.json.application<[TypeTagObjectUnion], "swagger", false>());
