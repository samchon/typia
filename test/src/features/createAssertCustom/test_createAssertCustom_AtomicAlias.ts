import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { AtomicAlias } from "../../structures/AtomicAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_AtomicAlias = (): void => _test_assert(CustomGuardError)(
    "AtomicAlias",
)<AtomicAlias>(
    AtomicAlias
)(typia.createAssert<AtomicAlias>((p) => new CustomGuardError(p)));
