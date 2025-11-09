import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_misc_assertPrune_TypeTagArrayUnion = (): void =>
  _test_misc_assertPrune(TypeGuardError)(
    "TypeTagArrayUnion",
  )<TypeTagArrayUnion>(TypeTagArrayUnion)((input) =>
    typia.misc.assertPrune<TypeTagArrayUnion>(input),
  );
