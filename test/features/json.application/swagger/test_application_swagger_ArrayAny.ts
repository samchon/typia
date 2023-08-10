import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayAny } from "../../../structures/ArrayAny";

export const test_json_application_swagger_ArrayAny = _test_json_application(
    "swagger",
)("ArrayAny")(typia.json.application<[ArrayAny], "swagger">());
