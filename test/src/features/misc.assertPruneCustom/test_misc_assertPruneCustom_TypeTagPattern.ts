import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertPruneCustom_TypeTagPattern =
  _test_misc_assertPrune(CustomGuardError)("TypeTagPattern")<TypeTagPattern>(
    TypeTagPattern,
  )((input) =>
    typia.misc.assertPrune<TypeTagPattern>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
