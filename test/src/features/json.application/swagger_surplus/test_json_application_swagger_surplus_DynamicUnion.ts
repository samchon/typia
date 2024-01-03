import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { DynamicUnion } from "../../../structures/DynamicUnion";

export const test_json_application_swagger_surplus_DynamicUnion =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "DynamicUnion",
  })(typia.json.application<[DynamicUnion], "swagger", true>());
