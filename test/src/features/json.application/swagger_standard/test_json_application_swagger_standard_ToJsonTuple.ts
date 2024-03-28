import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ToJsonTuple } from "../../../structures/ToJsonTuple";

export const test_json_application_swagger_standard_ToJsonTuple =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ToJsonTuple",
  })(typia.json.application<[ToJsonTuple], "swagger", false>());
