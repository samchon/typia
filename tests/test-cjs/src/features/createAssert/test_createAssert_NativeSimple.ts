import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_createAssert_NativeSimple = (): void =>
  _test_assert(TypeGuardError)("NativeSimple")<NativeSimple>(NativeSimple)(
    typia.createAssert<NativeSimple>(),
  );
