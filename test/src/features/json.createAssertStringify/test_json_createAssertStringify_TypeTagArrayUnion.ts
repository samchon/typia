import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_json_createAssertStringify_TypeTagArrayUnion =
  _test_json_assertStringify("TypeTagArrayUnion")<TypeTagArrayUnion>(
    TypeTagArrayUnion,
  )(typia.json.createAssertStringify<TypeTagArrayUnion>());
