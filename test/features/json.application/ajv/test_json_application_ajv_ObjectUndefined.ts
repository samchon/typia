import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectUndefined } from "../../../structures/ObjectUndefined";

export const test_json_application_ajv_ObjectUndefined = _test_json_application(
    "ajv",
)("ObjectUndefined")(typia.json.application<[ObjectUndefined], "ajv">());
