import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_createAssertEqualsCustom_AtomicIntersection = (): void =>
  _test_assertEquals(CustomGuardError)(
    "AtomicIntersection",
  )<AtomicIntersection>(AtomicIntersection)(
    typia.createAssertEquals<AtomicIntersection>(
      (p) => new CustomGuardError(p),
    ),
  );
