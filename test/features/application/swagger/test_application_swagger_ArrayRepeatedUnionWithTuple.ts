import typia from "typia"
import { ArrayRepeatedUnionWithTuple } from "../../../structures/ArrayRepeatedUnionWithTuple";
import { _test_application } from "../../../internal/_test_application";

export const test_application_swagger_ArrayRepeatedUnionWithTuple = 
    _test_application("swagger")(
        "ArrayRepeatedUnionWithTuple",
        typia.application<[ArrayRepeatedUnionWithTuple], "swagger">(),
    );