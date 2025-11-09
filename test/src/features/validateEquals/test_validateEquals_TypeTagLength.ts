import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_validateEquals_TypeTagLength = (): void => _test_validateEquals(
    "TypeTagLength",
)<TypeTagLength>(
    TypeTagLength
)((input) => typia.validateEquals<TypeTagLength>(input));
