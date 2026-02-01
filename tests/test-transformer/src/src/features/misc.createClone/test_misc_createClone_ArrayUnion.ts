import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_misc_createClone_ArrayUnion = (): void => _test_misc_clone(
    "ArrayUnion",
)<ArrayUnion>(
    ArrayUnion
)(typia.misc.createClone<ArrayUnion>());
