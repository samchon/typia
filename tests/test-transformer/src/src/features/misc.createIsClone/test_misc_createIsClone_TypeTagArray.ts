import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_misc_createIsClone_TypeTagArray = (): void => _test_misc_isClone(
    "TypeTagArray",
)<TypeTagArray>(
    TypeTagArray
)(typia.misc.createIsClone<TypeTagArray>());
