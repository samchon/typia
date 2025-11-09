import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { AtomicSimple } from "../../structures/AtomicSimple";

import { TypeGuardError } from "typia";

export const test_assertEquals_AtomicSimple = (): void => _test_assertEquals(TypeGuardError)(
    "AtomicSimple",
)<AtomicSimple>(
    AtomicSimple
)((input) => typia.assertEquals<AtomicSimple>(input));
