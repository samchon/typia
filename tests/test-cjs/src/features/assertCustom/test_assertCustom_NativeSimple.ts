import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_assertCustom_NativeSimple = (): void =>
  _test_assert(CustomGuardError)("NativeSimple")<NativeSimple>(NativeSimple)(
    (input) =>
      typia.assert<NativeSimple>(input, (p) => new CustomGuardError(p)),
  );
