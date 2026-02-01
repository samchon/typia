import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_misc_validateClone_TypeTagPattern = (): void => _test_misc_validateClone(
    "TypeTagPattern",
)<TypeTagPattern>(
    TypeTagPattern
)((input) => typia.misc.validateClone<TypeTagPattern>(input));
