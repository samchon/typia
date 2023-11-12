import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayUnion } from "../../../structures/ArrayUnion";

export const test_json_application_ajv_ArrayUnion = _test_json_application(
    "ajv",
)("ArrayUnion")(typia.json.application<[ArrayUnion], "ajv">());
