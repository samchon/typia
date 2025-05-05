import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_compare_equals_TypeTagRangeBigInt = _test_compare_equals(
    "TypeTagRangeBigInt",
)<TypeTagRangeBigInt>(
    TypeTagRangeBigInt
)((a, b) => typia.compare.equals<TypeTagRangeBigInt>(a, b));
