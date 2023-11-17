import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";

export const test_json_application_ajv_ToJsonDouble = _test_json_application(
  "ajv",
)("ToJsonDouble")(typia.json.application<[ToJsonDouble], "ajv">());
