import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_createValidateClone_ArrayRepeatedUnionWithTuple =
    _test_validateClone(
        "ArrayRepeatedUnionWithTuple",
        ArrayRepeatedUnionWithTuple.generate,
        typia.createValidateClone<ArrayRepeatedUnionWithTuple>(),
        ArrayRepeatedUnionWithTuple.SPOILERS,
    );
