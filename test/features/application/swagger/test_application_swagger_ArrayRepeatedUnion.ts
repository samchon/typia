import typia from "typia";

import { _test_application } from "../../../internal/_test_application";
import { ArrayRepeatedUnion } from "../../../structures/ArrayRepeatedUnion";

export const test_application_swagger_ArrayRepeatedUnion = _test_application(
    "swagger",
)("ArrayRepeatedUnion", typia.application<[ArrayRepeatedUnion], "swagger">());
