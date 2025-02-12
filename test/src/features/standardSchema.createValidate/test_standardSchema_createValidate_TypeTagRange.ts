import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_standardSchema_createValidate_TypeTagRange = _test_standardSchema_validate(
    "TypeTagRange",
)<TypeTagRange>(
    TypeTagRange
)(typia.createValidate<TypeTagRange>());
