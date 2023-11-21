import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { ToJsonArray } from "../../../structures/ToJsonArray";

export const test_json_application_ajv_ToJsonArray = _test_json_application(
  "ajv",
)("ToJsonArray")(typia.json.application<[ToJsonArray], "ajv">());
