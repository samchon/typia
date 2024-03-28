import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { DynamicTree } from "../../../structures/DynamicTree";

export const test_json_application_swagger_standard_DynamicTree =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "DynamicTree",
  })(typia.json.application<[DynamicTree], "swagger", false>());
