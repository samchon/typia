import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_misc_assertCloneCustom_TypeTagArrayUnion =
  _test_misc_assertClone(CustomGuardError)(
    "TypeTagArrayUnion",
  )<TypeTagArrayUnion>(TypeTagArrayUnion)((input) =>
    typia.misc.assertClone<TypeTagArrayUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
