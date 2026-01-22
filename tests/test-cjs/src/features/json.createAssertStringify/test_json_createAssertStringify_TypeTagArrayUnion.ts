import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_json_createAssertStringify_TypeTagArrayUnion = (): void =>
  _test_json_assertStringify(TypeGuardError)(
    "TypeTagArrayUnion",
  )<TypeTagArrayUnion>(TypeTagArrayUnion)(
    typia.json.createAssertStringify<TypeTagArrayUnion>(),
  );
