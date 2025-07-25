import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_assertGuardEqualsCustom_DynamicUnion = (): void =>
  _test_assertGuardEquals(CustomGuardError)("DynamicUnion")<DynamicUnion>(
    DynamicUnion,
  )((input) =>
    typia.assertGuardEquals<DynamicUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
