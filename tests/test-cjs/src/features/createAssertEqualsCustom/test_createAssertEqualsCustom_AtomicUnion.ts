import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_createAssertEqualsCustom_AtomicUnion = (): void =>
  _test_assertEquals(CustomGuardError)("AtomicUnion")<AtomicUnion>(AtomicUnion)(
    typia.createAssertEquals<AtomicUnion>((p) => new CustomGuardError(p)),
  );
