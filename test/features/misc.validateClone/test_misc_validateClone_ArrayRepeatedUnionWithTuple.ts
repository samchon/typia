import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_misc_validateClone_ArrayRepeatedUnionWithTuple =
    _test_misc_validateClone<ArrayRepeatedUnionWithTuple>(
        ArrayRepeatedUnionWithTuple,
    )((input) => typia.misc.validateClone(input));
