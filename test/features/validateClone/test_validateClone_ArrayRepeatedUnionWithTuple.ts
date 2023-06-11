import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_validateClone_ArrayRepeatedUnionWithTuple =
    _test_validateClone(
        "ArrayRepeatedUnionWithTuple",
        ArrayRepeatedUnionWithTuple.generate,
        (input) => typia.validateClone(input),
        ArrayRepeatedUnionWithTuple.SPOILERS,
    );
