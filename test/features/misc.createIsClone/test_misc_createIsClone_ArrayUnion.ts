import typia from "../../../src";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_misc_createIsClone_ArrayUnion = _test_misc_isClone(
    "ArrayUnion",
)<ArrayUnion>(
    ArrayUnion
)(typia.misc.createIsClone<ArrayUnion>());
