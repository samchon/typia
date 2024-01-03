import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_json_application_swagger_surplus_DynamicConstant =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "DynamicConstant",
  })(typia.json.application<[DynamicConstant], "swagger", true>());
