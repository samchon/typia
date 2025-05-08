import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_standardSchema_createValidate_TypeTagType = _test_standardSchema_validate(
    "TypeTagType",
)<TypeTagType>(
    TypeTagType
)(typia.createValidate<TypeTagType>());
