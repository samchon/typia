import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { DynamicNever } from "../../../structures/DynamicNever";

export const test_json_application_swagger_surplus_DynamicNever =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "DynamicNever",
  })(typia.json.application<[DynamicNever], "swagger", true>());
