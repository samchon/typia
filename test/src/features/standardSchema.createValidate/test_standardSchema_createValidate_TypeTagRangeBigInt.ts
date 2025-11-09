import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_standardSchema_createValidate_TypeTagRangeBigInt = (): void => _test_standardSchema_validate(
    "TypeTagRangeBigInt",
)<TypeTagRangeBigInt>(
    TypeTagRangeBigInt
)(typia.createValidate<TypeTagRangeBigInt>());
