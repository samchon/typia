import typia from "../../../src";

import { _test_equals } from "../../internal/_test_equals";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_createEquals_TypeTagBigInt = _test_equals(
    "TypeTagBigInt",
)<TypeTagBigInt>(
    TypeTagBigInt
)(typia.createEquals<TypeTagBigInt>());
