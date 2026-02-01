import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_validate_TypeTagArrayUnion = (): void => _test_validate(
    "TypeTagArrayUnion",
)<TypeTagArrayUnion>(
    TypeTagArrayUnion
)((input) => typia.validate<TypeTagArrayUnion>(input));
