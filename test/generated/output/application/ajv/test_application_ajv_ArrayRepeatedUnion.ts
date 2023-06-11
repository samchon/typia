import typia from "typia";

import { _test_application } from "../../../../internal/_test_application";
import { ArrayRepeatedUnion } from "../../../../structures/ArrayRepeatedUnion";

export const test_application_ajv_ArrayRepeatedUnion = _test_application("ajv")(
    "ArrayRepeatedUnion",
    typia.application<[ArrayRepeatedUnion], "ajv">(),
);
