import typia from "../../../src";

import { _test_equals } from "../../internal/_test_equals";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_createEquals_TypeTagTypeBigInt = _test_equals(
    "TypeTagTypeBigInt",
)<TypeTagTypeBigInt>(
    TypeTagTypeBigInt
)(typia.createEquals<TypeTagTypeBigInt>());
