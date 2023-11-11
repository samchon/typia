import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectPartial } from "../../../structures/ObjectPartial";

export const test_json_application_ajv_ObjectPartial = _test_json_application(
    "ajv",
)("ObjectPartial")(typia.json.application<[ObjectPartial], "ajv">());
