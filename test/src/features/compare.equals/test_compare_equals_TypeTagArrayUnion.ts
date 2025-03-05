import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_compare_equals_TypeTagArrayUnion = _test_compare_equals(
    "TypeTagArrayUnion",
)<TypeTagArrayUnion>(
    TypeTagArrayUnion
)((a, b) => typia.compare.equals<TypeTagArrayUnion>(a, b));
