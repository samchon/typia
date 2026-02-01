import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_standardSchema_createValidate_TypeTagLength = (): void => _test_standardSchema_validate(
    "TypeTagLength",
)<TypeTagLength>(
    TypeTagLength
)(typia.createValidate<TypeTagLength>());
