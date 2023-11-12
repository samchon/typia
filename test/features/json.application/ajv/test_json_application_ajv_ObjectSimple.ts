import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectSimple } from "../../../structures/ObjectSimple";

export const test_json_application_ajv_ObjectSimple = _test_json_application(
    "ajv",
)("ObjectSimple")(typia.json.application<[ObjectSimple], "ajv">());
