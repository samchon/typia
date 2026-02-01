import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_misc_isClone_ArrayUnion = (): void => _test_misc_isClone(
    "ArrayUnion",
)<ArrayUnion>(
    ArrayUnion
)((input) => typia.misc.isClone<ArrayUnion>(input));
