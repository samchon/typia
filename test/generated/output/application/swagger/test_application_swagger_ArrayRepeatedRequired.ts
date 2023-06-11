import typia from "typia";

import { _test_application } from "../../../../internal/_test_application";
import { ArrayRepeatedRequired } from "../../../../structures/ArrayRepeatedRequired";

export const test_application_swagger_ArrayRepeatedRequired = _test_application(
    "swagger",
)(
    "ArrayRepeatedRequired",
    typia.application<[ArrayRepeatedRequired], "swagger">(),
);
