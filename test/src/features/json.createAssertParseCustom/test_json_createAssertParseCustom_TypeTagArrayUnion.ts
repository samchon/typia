import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertParseCustom_TypeTagArrayUnion =
  _test_json_assertParse(CustomGuardError)(
    "TypeTagArrayUnion",
  )<TypeTagArrayUnion>(TypeTagArrayUnion)(
    typia.json.createAssertParse<TypeTagArrayUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
