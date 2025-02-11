import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_createValidateEquals_TypeTagType = _test_validateEquals(
    "TypeTagType",
)<TypeTagType>(
    TypeTagType
)(typia.createValidateEquals<TypeTagType>());
