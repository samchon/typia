import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_compare_equals_TypeTagTypeBigInt = _test_compare_equals(
    "TypeTagTypeBigInt",
)<TypeTagTypeBigInt>(
    TypeTagTypeBigInt
)((a, b) => typia.compare.equals<TypeTagTypeBigInt>(a, b));
