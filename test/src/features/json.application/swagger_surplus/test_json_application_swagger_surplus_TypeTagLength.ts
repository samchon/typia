import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagLength } from "../../../structures/TypeTagLength";

export const test_json_application_swagger_surplus_TypeTagLength =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "TypeTagLength",
  })(typia.json.application<[TypeTagLength], "swagger", true>());
