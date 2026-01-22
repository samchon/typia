import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_assertCustom_DynamicSimple = (): void =>
  _test_assert(CustomGuardError)("DynamicSimple")<DynamicSimple>(DynamicSimple)(
    (input) =>
      typia.assert<DynamicSimple>(input, (p) => new CustomGuardError(p)),
  );
