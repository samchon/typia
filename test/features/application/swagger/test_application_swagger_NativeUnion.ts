import typia from "typia";

import { NativeUnion } from "../../../structures/NativeUnion";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_NativeUnion = _test_application(
    "swagger",
)("NativeUnion", typia.application<[NativeUnion], "swagger">());
