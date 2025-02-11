import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_equals_TypeTagMatrix = _test_equals(
    "TypeTagMatrix",
)<TypeTagMatrix>(
    TypeTagMatrix
)((input) => typia.equals<TypeTagMatrix>(input));
