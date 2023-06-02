import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_createValidateParse_ArrayRepeatedUnionWithTuple =
    _test_validateParse(
        "ArrayRepeatedUnionWithTuple",
        ArrayRepeatedUnionWithTuple.generate,
        typia.createValidateParse<ArrayRepeatedUnionWithTuple>(),
        ArrayRepeatedUnionWithTuple.SPOILERS,
    );
