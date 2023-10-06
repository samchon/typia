import typia from "../../../src";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_misc_createAssertClone_ArrayRepeatedUnion = _test_misc_assertClone(
    "ArrayRepeatedUnion",
)<ArrayRepeatedUnion>(
    ArrayRepeatedUnion
)(typia.misc.createAssertClone<ArrayRepeatedUnion>());
