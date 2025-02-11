import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_createValidate_TypeTagBigInt = _test_validate(
    "TypeTagBigInt",
)<TypeTagBigInt>(
    TypeTagBigInt
)(typia.createValidate<TypeTagBigInt>());
