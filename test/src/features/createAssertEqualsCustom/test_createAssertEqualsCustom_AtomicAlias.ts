import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_createAssertEqualsCustom_AtomicAlias = _test_assertEquals(
  CustomGuardError,
)("AtomicAlias")<AtomicAlias>(AtomicAlias)(
  typia.createAssertEquals<AtomicAlias>((p) => new CustomGuardError(p)),
);
