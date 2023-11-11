import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectInternal } from "../../../structures/ObjectInternal";

export const test_json_application_ajv_ObjectInternal = _test_json_application(
    "ajv",
)("ObjectInternal")(typia.json.application<[ObjectInternal], "ajv">());
