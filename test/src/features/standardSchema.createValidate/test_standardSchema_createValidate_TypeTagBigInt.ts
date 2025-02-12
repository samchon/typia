import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_standardSchema_createValidate_TypeTagBigInt = _test_standardSchema_validate(
    "TypeTagBigInt",
)<TypeTagBigInt>(
    TypeTagBigInt
)(typia.createValidate<TypeTagBigInt>());
