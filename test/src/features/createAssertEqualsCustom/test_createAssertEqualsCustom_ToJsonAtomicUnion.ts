import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_createAssertEqualsCustom_ToJsonAtomicUnion = (): void =>
  _test_assertEquals(CustomGuardError)("ToJsonAtomicUnion")<ToJsonAtomicUnion>(
    ToJsonAtomicUnion,
  )(
    typia.createAssertEquals<ToJsonAtomicUnion>((p) => new CustomGuardError(p)),
  );
