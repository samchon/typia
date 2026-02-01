import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_createValidateEquals_TypeTagDefault = (): void => _test_validateEquals(
    "TypeTagDefault",
)<TypeTagDefault>(
    TypeTagDefault
)(typia.createValidateEquals<TypeTagDefault>());
