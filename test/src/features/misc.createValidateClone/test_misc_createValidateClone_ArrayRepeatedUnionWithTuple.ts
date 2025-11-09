import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_misc_createValidateClone_ArrayRepeatedUnionWithTuple = (): void => _test_misc_validateClone(
    "ArrayRepeatedUnionWithTuple",
)<ArrayRepeatedUnionWithTuple>(
    ArrayRepeatedUnionWithTuple
)(typia.misc.createValidateClone<ArrayRepeatedUnionWithTuple>());
