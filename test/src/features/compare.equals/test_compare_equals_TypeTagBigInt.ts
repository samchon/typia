import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_compare_equals_TypeTagBigInt = _test_compare_equals(
    "TypeTagBigInt",
)<TypeTagBigInt>(
    TypeTagBigInt
)((a, b) => typia.compare.equals<TypeTagBigInt>(a, b));
