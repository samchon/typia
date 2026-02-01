import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_createValidateEquals_TypeTagFormat = (): void => _test_validateEquals(
    "TypeTagFormat",
)<TypeTagFormat>(
    TypeTagFormat
)(typia.createValidateEquals<TypeTagFormat>());
