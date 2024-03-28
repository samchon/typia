import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";

export const test_json_application_swagger_standard_ToJsonDouble =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ToJsonDouble",
  })(typia.json.application<[ToJsonDouble], "swagger", false>());
