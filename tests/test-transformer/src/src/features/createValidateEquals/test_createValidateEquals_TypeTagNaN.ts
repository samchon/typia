import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_createValidateEquals_TypeTagNaN = (): void => _test_validateEquals(
    "TypeTagNaN",
)<TypeTagNaN>(
    TypeTagNaN
)(typia.createValidateEquals<TypeTagNaN>());
