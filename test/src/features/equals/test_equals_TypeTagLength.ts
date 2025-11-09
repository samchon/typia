import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_equals_TypeTagLength = (): void => _test_equals(
    "TypeTagLength",
)<TypeTagLength>(
    TypeTagLength
)((input) => typia.equals<TypeTagLength>(input));
