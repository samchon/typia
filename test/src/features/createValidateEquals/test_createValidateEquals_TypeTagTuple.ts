import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_createValidateEquals_TypeTagTuple = (): void => _test_validateEquals(
    "TypeTagTuple",
)<TypeTagTuple>(
    TypeTagTuple
)(typia.createValidateEquals<TypeTagTuple>());
