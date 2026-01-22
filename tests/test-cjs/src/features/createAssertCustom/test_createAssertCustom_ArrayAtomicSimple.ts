import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_createAssertCustom_ArrayAtomicSimple = (): void =>
  _test_assert(CustomGuardError)("ArrayAtomicSimple")<ArrayAtomicSimple>(
    ArrayAtomicSimple,
  )(typia.createAssert<ArrayAtomicSimple>((p) => new CustomGuardError(p)));
