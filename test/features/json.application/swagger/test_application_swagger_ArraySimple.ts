import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArraySimple } from "../../../structures/ArraySimple";

export const test_json_application_swagger_ArraySimple = _test_json_application(
    "swagger",
)("ArraySimple")(typia.json.application<[ArraySimple], "swagger">());
