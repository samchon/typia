import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { AtomicSimple } from "../../structures/AtomicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_AtomicSimple = (): void => _test_assertGuard(CustomGuardError)(
    "AtomicSimple",
)<AtomicSimple>(
    AtomicSimple
)(typia.createAssertGuard<AtomicSimple>((p) => new CustomGuardError(p)));
