import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { AtomicAlias } from "../../structures/AtomicAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_AtomicAlias = _test_assertEquals(CustomGuardError)(
    "AtomicAlias",
)<AtomicAlias>(
    AtomicAlias
)((input) => typia.assertEquals<AtomicAlias>(input, (p) => new CustomGuardError(p)));
