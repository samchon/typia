import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertPruneCustom_TypeTagArrayUnion =
  _test_misc_assertPrune(CustomGuardError)(
    "TypeTagArrayUnion",
  )<TypeTagArrayUnion>(TypeTagArrayUnion)((input) =>
    typia.misc.assertPrune<TypeTagArrayUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
