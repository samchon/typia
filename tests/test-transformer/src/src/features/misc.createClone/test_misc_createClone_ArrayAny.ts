import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_misc_createClone_ArrayAny = (): void => _test_misc_clone(
    "ArrayAny",
)<ArrayAny>(
    ArrayAny
)(typia.misc.createClone<ArrayAny>());
