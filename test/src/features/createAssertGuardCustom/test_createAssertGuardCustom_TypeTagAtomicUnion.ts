import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_TypeTagAtomicUnion =
  _test_assertGuard(CustomGuardError)("TypeTagAtomicUnion")<TypeTagAtomicUnion>(
    TypeTagAtomicUnion,
  )(
    typia.createAssertGuard<TypeTagAtomicUnion>((p) => new CustomGuardError(p)),
  );
