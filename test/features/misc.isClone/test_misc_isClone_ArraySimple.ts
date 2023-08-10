import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_misc_isClone_ArraySimple = _test_misc_isClone<ArraySimple>(
    ArraySimple,
)((input) => typia.misc.isClone<ArraySimple>(input));
