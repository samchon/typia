import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

import { TypeGuardError } from "typia";

export const test_json_assertStringify_TypeTagArrayUnion = (): void => _test_json_assertStringify(TypeGuardError)(
    "TypeTagArrayUnion",
)<TypeTagArrayUnion>(
    TypeTagArrayUnion
)((input) => typia.json.assertStringify<TypeTagArrayUnion>(input));
