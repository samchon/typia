import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_functional_assertReturnCustom_FunctionalArrayUnion =
  (): void =>
    _test_functional_assertReturn(CustomGuardError)("FunctionalArrayUnion")(
      FunctionalArrayUnion,
    )((p: (input: FunctionalArrayUnion) => FunctionalArrayUnion) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
