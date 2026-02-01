import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_misc_clone_TypeTagRange = (): void => _test_misc_clone(
    "TypeTagRange",
)<TypeTagRange>(
    TypeTagRange
)((input) => typia.misc.clone<TypeTagRange>(input));
