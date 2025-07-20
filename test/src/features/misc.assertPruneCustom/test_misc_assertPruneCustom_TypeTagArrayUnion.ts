import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_misc_assertPruneCustom_TypeTagArrayUnion = (): void =>
  _test_misc_assertPrune(CustomGuardError)(
    "TypeTagArrayUnion",
  )<TypeTagArrayUnion>(TypeTagArrayUnion)((input) =>
    typia.misc.assertPrune<TypeTagArrayUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
