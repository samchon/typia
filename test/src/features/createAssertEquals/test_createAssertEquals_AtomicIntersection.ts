import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_AtomicIntersection = (): void => _test_assertEquals(TypeGuardError)(
    "AtomicIntersection",
)<AtomicIntersection>(
    AtomicIntersection
)(typia.createAssertEquals<AtomicIntersection>());
