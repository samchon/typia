import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_validateEquals_TypeTagType = (): void => _test_validateEquals(
    "TypeTagType",
)<TypeTagType>(
    TypeTagType
)((input) => typia.validateEquals<TypeTagType>(input));
