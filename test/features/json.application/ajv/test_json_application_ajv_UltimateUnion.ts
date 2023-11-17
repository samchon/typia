import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { UltimateUnion } from "../../../structures/UltimateUnion";

export const test_json_application_ajv_UltimateUnion = _test_json_application(
  "ajv",
)("UltimateUnion")(typia.json.application<[UltimateUnion], "ajv">());
