import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_json_assertStringify_TypeTagArrayUnion =
  _test_json_assertStringify("TypeTagArrayUnion")<TypeTagArrayUnion>(
    TypeTagArrayUnion,
  )((input) => typia.json.assertStringify<TypeTagArrayUnion>(input));
