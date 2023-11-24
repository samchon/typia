import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_json_isStringify_TypeTagArrayUnion = _test_json_isStringify(
  "TypeTagArrayUnion",
)<TypeTagArrayUnion>(TypeTagArrayUnion)((input) =>
  typia.json.isStringify<TypeTagArrayUnion>(input),
);
