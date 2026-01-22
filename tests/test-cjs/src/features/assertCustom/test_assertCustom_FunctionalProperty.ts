import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_assertCustom_FunctionalProperty = (): void =>
  _test_assert(CustomGuardError)("FunctionalProperty")<FunctionalProperty>(
    FunctionalProperty,
  )((input) =>
    typia.assert<FunctionalProperty>(input, (p) => new CustomGuardError(p)),
  );
