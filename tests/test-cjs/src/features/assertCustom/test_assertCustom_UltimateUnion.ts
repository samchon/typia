import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_assertCustom_UltimateUnion = (): void =>
  _test_assert(CustomGuardError)("UltimateUnion")<UltimateUnion>(UltimateUnion)(
    (input) =>
      typia.assert<UltimateUnion>(input, (p) => new CustomGuardError(p)),
  );
