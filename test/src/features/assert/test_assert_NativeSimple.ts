import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_assert_NativeSimple = (): void =>
  _test_assert(TypeGuardError)("NativeSimple")<NativeSimple>(NativeSimple)(
    (input) => typia.assert<NativeSimple>(input),
  );
