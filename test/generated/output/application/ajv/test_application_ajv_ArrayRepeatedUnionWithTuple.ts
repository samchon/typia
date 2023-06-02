import typia from "typia";

import { _test_application } from "../../../../internal/_test_application";
import { ArrayRepeatedUnionWithTuple } from "../../../../structures/ArrayRepeatedUnionWithTuple";

export const test_application_ajv_ArrayRepeatedUnionWithTuple =
    _test_application("ajv")(
        "ArrayRepeatedUnionWithTuple",
        typia.application<[ArrayRepeatedUnionWithTuple], "ajv">(),
    );
