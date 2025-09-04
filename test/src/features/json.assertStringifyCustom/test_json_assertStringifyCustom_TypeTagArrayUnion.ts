import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_json_assertStringifyCustom_TypeTagArrayUnion = (): void =>
  _test_json_assertStringify(CustomGuardError)(
    "TypeTagArrayUnion",
  )<TypeTagArrayUnion>(TypeTagArrayUnion)((input) =>
    typia.json.assertStringify<TypeTagArrayUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
