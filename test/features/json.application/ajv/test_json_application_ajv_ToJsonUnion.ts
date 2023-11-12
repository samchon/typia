import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { ToJsonUnion } from "../../../structures/ToJsonUnion";

export const test_json_application_ajv_ToJsonUnion = _test_json_application(
    "ajv",
)("ToJsonUnion")(typia.json.application<[ToJsonUnion], "ajv">());
