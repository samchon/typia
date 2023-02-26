import typia from "typia";

import { NativeSimple } from "../../../structures/NativeSimple";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_NativeSimple = _test_application(
    "swagger",
)("NativeSimple", typia.application<[NativeSimple], "swagger">());
