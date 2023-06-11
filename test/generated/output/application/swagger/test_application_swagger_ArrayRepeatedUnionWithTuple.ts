import typia from "typia";

import { _test_application } from "../../../../internal/_test_application";
import { ArrayRepeatedUnionWithTuple } from "../../../../structures/ArrayRepeatedUnionWithTuple";

export const test_application_swagger_ArrayRepeatedUnionWithTuple =
    _test_application("swagger")(
        "ArrayRepeatedUnionWithTuple",
        typia.application<[ArrayRepeatedUnionWithTuple], "swagger">(),
    );
