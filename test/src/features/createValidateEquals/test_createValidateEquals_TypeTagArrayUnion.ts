import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_createValidateEquals_TypeTagArrayUnion = (): void => _test_validateEquals(
    "TypeTagArrayUnion",
)<TypeTagArrayUnion>(
    TypeTagArrayUnion
)(typia.createValidateEquals<TypeTagArrayUnion>());
