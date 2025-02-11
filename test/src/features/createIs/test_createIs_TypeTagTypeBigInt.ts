import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_createIs_TypeTagTypeBigInt = _test_is(
    "TypeTagTypeBigInt",
)<TypeTagTypeBigInt>(
    TypeTagTypeBigInt
)(typia.createIs<TypeTagTypeBigInt>());
