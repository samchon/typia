import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { UltimateUnion } from "../../../structures/UltimateUnion";

export const test_json_application_swagger_standard_UltimateUnion =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "UltimateUnion",
  })(typia.json.application<[UltimateUnion], "swagger", false>());
