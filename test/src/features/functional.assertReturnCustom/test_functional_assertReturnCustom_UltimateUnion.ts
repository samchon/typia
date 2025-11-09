import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_functional_assertReturnCustom_UltimateUnion = (): void =>
  _test_functional_assertReturn(CustomGuardError)("UltimateUnion")(
    UltimateUnion,
  )((p: (input: UltimateUnion) => UltimateUnion) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
