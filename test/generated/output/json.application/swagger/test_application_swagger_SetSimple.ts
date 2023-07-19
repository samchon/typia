import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { SetSimple } from "../../../../structures/SetSimple";

export const test_json_application_swagger_SetSimple = _test_json_application(
    "swagger",
)("SetSimple")(typia.json.application<[SetSimple], "swagger">());
