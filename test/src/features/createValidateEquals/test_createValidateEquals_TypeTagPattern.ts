import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_createValidateEquals_TypeTagPattern = (): void => _test_validateEquals(
    "TypeTagPattern",
)<TypeTagPattern>(
    TypeTagPattern
)(typia.createValidateEquals<TypeTagPattern>());
