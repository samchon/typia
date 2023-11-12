import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { ToJsonTuple } from "../../../structures/ToJsonTuple";

export const test_json_application_ajv_ToJsonTuple = _test_json_application(
    "ajv",
)("ToJsonTuple")(typia.json.application<[ToJsonTuple], "ajv">());
