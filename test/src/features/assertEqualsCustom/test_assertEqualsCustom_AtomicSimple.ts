import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { AtomicSimple } from "../../structures/AtomicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_AtomicSimple = _test_assertEquals(CustomGuardError)(
    "AtomicSimple",
)<AtomicSimple>(
    AtomicSimple
)((input) => typia.assertEquals<AtomicSimple>(input, (p) => new CustomGuardError(p)));
