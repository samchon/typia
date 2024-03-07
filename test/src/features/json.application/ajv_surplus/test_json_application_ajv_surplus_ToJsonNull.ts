import typia from "typia";
import { ToJsonNull } from "../../../structures/ToJsonNull";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_surplus_ToJsonNull =
  _test_json_application({ purpose: "ajv", surplus: true, name: "ToJsonNull" })(
    typia.json.application<[ToJsonNull], "ajv", true>(),
  );
