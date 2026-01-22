import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_createAssertCustom_ConstantAtomicUnion = (): void =>
  _test_assert(CustomGuardError)("ConstantAtomicUnion")<ConstantAtomicUnion>(
    ConstantAtomicUnion,
  )(typia.createAssert<ConstantAtomicUnion>((p) => new CustomGuardError(p)));
