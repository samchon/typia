import typia from "typia";

import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_AtomicSimple = _test_validateEquals(
    "AtomicSimple",
    AtomicSimple.generate,
    (input) => typia.validateEquals(input),
);
