import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

import { TypeGuardError } from "typia";

export const test_json_createAssertParse_TypeTagArrayUnion =
  _test_json_assertParse(TypeGuardError)(
    "TypeTagArrayUnion",
  )<TypeTagArrayUnion>(TypeTagArrayUnion)(
    typia.json.createAssertParse<TypeTagArrayUnion>(),
  );
