import typia from "typia";

import { _test_application } from "../../../internal/_test_application";
import { ArrayRepeatedNullable } from "../../../structures/ArrayRepeatedNullable";

export const test_application_swagger_ArrayRepeatedNullable = _test_application(
    "swagger",
)(
    "ArrayRepeatedNullable",
    typia.application<[ArrayRepeatedNullable], "swagger">(),
);
