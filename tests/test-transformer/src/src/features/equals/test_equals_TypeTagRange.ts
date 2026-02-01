import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_equals_TypeTagRange = (): void => _test_equals(
    "TypeTagRange",
)<TypeTagRange>(
    TypeTagRange
)((input) => typia.equals<TypeTagRange>(input));
