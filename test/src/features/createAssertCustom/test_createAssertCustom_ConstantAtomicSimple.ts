import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_createAssertCustom_ConstantAtomicSimple = (): void =>
  _test_assert(CustomGuardError)("ConstantAtomicSimple")<ConstantAtomicSimple>(
    ConstantAtomicSimple,
  )(typia.createAssert<ConstantAtomicSimple>((p) => new CustomGuardError(p)));
