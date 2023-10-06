import typia from "../../../src";

import { _test_equals } from "../../internal/_test_equals";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_equals_TypeTagRangeBigInt = _test_equals(
    "TypeTagRangeBigInt",
)<TypeTagRangeBigInt>(
    TypeTagRangeBigInt
)((input) => typia.equals<TypeTagRangeBigInt>(input));
