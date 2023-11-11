import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";

export const test_json_application_ajv_ObjectJsonTag = _test_json_application(
    "ajv",
)("ObjectJsonTag")(typia.json.application<[ObjectJsonTag], "ajv">());
