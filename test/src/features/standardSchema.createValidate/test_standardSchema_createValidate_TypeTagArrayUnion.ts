import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_standardSchema_createValidate_TypeTagArrayUnion = _test_standardSchema_validate(
    "TypeTagArrayUnion",
)<TypeTagArrayUnion>(
    TypeTagArrayUnion
)(typia.createValidate<TypeTagArrayUnion>());
