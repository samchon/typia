import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_is_AtomicSimple = (): void => _test_is(
    "AtomicSimple",
)<AtomicSimple>(
    AtomicSimple
)((input) => typia.is<AtomicSimple>(input));
