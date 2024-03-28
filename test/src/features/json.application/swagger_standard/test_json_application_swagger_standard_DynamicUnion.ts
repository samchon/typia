import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { DynamicUnion } from "../../../structures/DynamicUnion";

export const test_json_application_swagger_standard_DynamicUnion =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "DynamicUnion",
  })(typia.json.application<[DynamicUnion], "swagger", false>());
