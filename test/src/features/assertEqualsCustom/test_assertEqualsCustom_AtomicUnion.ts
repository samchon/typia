import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { AtomicUnion } from "../../structures/AtomicUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_AtomicUnion = (): void => _test_assertEquals(CustomGuardError)(
    "AtomicUnion",
)<AtomicUnion>(
    AtomicUnion
)((input) => typia.assertEquals<AtomicUnion>(input, (p) => new CustomGuardError(p)));
