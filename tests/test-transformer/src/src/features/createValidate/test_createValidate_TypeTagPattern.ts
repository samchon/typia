import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_createValidate_TypeTagPattern = (): void => _test_validate(
    "TypeTagPattern",
)<TypeTagPattern>(
    TypeTagPattern
)(typia.createValidate<TypeTagPattern>());
