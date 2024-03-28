import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ToJsonNull } from "../../../structures/ToJsonNull";

export const test_json_application_swagger_surplus_ToJsonNull =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ToJsonNull",
  })(typia.json.application<[ToJsonNull], "swagger", true>());
