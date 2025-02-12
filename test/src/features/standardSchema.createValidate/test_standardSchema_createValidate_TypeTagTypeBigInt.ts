import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_standardSchema_createValidate_TypeTagTypeBigInt = _test_standardSchema_validate(
    "TypeTagTypeBigInt",
)<TypeTagTypeBigInt>(
    TypeTagTypeBigInt
)(typia.createValidate<TypeTagTypeBigInt>());
