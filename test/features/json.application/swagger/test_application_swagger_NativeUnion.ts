import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { NativeUnion } from "../../../structures/NativeUnion";

export const test_json_application_swagger_NativeUnion = _test_json_application(
    "swagger",
)("NativeUnion", typia.json.application<[NativeUnion], "swagger">());
