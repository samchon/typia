import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_standardSchema_createValidate_TypeTagDefault = _test_standardSchema_validate(
    "TypeTagDefault",
)<TypeTagDefault>(
    TypeTagDefault
)(typia.createValidate<TypeTagDefault>());
