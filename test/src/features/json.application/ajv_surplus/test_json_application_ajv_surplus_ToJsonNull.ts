import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ToJsonNull } from "../../../structures/ToJsonNull";

export const test_json_application_ajv_surplus_ToJsonNull =
  _test_json_application({ purpose: "ajv", surplus: true, name: "ToJsonNull" })(
    typia.json.application<[ToJsonNull], "ajv", true>(),
  );
