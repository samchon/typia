import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_assertEqualsCustom_TypeTagAtomicUnion = (): void =>
  _test_assertEquals(CustomGuardError)(
    "TypeTagAtomicUnion",
  )<TypeTagAtomicUnion>(TypeTagAtomicUnion)((input) =>
    typia.assertEquals<TypeTagAtomicUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
