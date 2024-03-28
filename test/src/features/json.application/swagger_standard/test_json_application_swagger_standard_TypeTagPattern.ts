import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagPattern } from "../../../structures/TypeTagPattern";

export const test_json_application_swagger_standard_TypeTagPattern =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "TypeTagPattern",
  })(typia.json.application<[TypeTagPattern], "swagger", false>());
