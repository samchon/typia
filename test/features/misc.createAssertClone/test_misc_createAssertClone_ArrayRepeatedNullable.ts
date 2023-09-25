import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_misc_createAssertClone_ArrayRepeatedNullable =
    _test_misc_assertClone("ArrayRepeatedNullable")<ArrayRepeatedNullable>(
        ArrayRepeatedNullable,
    )(typia.misc.createAssertClone<ArrayRepeatedNullable>());
