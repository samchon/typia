import typia from "../../../src";

import { _test_is } from "../../internal/_test_is";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_is_TypeTagBigInt = _test_is(
    "TypeTagBigInt",
)<TypeTagBigInt>(
    TypeTagBigInt
)((input) => typia.is<TypeTagBigInt>(input));
