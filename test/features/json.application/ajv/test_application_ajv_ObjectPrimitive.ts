import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectPrimitive } from "../../../structures/ObjectPrimitive";

export const test_json_application_ajv_ObjectPrimitive = _test_json_application(
    "ajv",
)("ObjectPrimitive")(typia.json.application<[ObjectPrimitive], "ajv">());
