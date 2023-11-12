import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagRange } from "../../../structures/TypeTagRange";

export const test_json_application_ajv_TypeTagRange = _test_json_application(
    "ajv",
)("TypeTagRange")(typia.json.application<[TypeTagRange], "ajv">());
