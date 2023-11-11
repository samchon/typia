import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagPattern } from "../../../structures/TypeTagPattern";

export const test_json_application_ajv_TypeTagPattern = _test_json_application(
    "ajv",
)("TypeTagPattern")(typia.json.application<[TypeTagPattern], "ajv">());
