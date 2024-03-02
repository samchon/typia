import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_json_createAssertStringifyCustom_TypeTagArrayUnion =
  _test_json_assertStringify(CustomGuardError)(
    "TypeTagArrayUnion",
  )<TypeTagArrayUnion>(TypeTagArrayUnion)(
    typia.json.createAssertStringify<TypeTagArrayUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
