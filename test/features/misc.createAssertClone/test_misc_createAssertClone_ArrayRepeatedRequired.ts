import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_misc_createAssertClone_ArrayRepeatedRequired =
    _test_misc_assertClone("ArrayRepeatedRequired")<ArrayRepeatedRequired>(
        ArrayRepeatedRequired,
    )(typia.misc.createAssertClone<ArrayRepeatedRequired>());
