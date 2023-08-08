import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayUnion } from "../../../../structures/ArrayUnion";

export const test_json_application_swagger_ArrayUnion = _test_json_application(
    "swagger",
)("ArrayUnion", typia.json.application<[ArrayUnion], "swagger">());
