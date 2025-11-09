import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_createEquals_TypeTagLength = (): void => _test_equals(
    "TypeTagLength",
)<TypeTagLength>(
    TypeTagLength
)(typia.createEquals<TypeTagLength>());
