import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_assertGuardCustom_ArrayAtomicAlias = (): void =>
  _test_assertGuard(CustomGuardError)("ArrayAtomicAlias")<ArrayAtomicAlias>(
    ArrayAtomicAlias,
  )((input) =>
    typia.assertGuard<ArrayAtomicAlias>(input, (p) => new CustomGuardError(p)),
  );
