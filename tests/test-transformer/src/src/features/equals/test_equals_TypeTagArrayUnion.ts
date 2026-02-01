import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_equals_TypeTagArrayUnion = (): void => _test_equals(
    "TypeTagArrayUnion",
)<TypeTagArrayUnion>(
    TypeTagArrayUnion
)((input) => typia.equals<TypeTagArrayUnion>(input));
