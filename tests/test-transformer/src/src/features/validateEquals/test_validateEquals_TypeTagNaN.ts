import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_validateEquals_TypeTagNaN = (): void => _test_validateEquals(
    "TypeTagNaN",
)<TypeTagNaN>(
    TypeTagNaN
)((input) => typia.validateEquals<TypeTagNaN>(input));
