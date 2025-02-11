import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { AtomicUnion } from "../../structures/AtomicUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_AtomicUnion = _test_assert(CustomGuardError)(
    "AtomicUnion",
)<AtomicUnion>(
    AtomicUnion
)(typia.createAssert<AtomicUnion>((p) => new CustomGuardError(p)));
