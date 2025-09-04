import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_createAssertEqualsCustom_TypeTagAtomicUnion = (): void =>
  _test_assertEquals(CustomGuardError)(
    "TypeTagAtomicUnion",
  )<TypeTagAtomicUnion>(TypeTagAtomicUnion)(
    typia.createAssertEquals<TypeTagAtomicUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
