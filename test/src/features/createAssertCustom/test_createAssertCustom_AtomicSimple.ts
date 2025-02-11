import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { AtomicSimple } from "../../structures/AtomicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_AtomicSimple = _test_assert(CustomGuardError)(
    "AtomicSimple",
)<AtomicSimple>(
    AtomicSimple
)(typia.createAssert<AtomicSimple>((p) => new CustomGuardError(p)));
