import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ToJsonNull } from "../../../structures/ToJsonNull";

export const test_json_application_swagger_standard_ToJsonNull =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ToJsonNull",
  })(typia.json.application<[ToJsonNull], "swagger", false>());
