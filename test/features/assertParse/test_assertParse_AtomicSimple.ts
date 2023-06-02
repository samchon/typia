import typia from "../../../src";

import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_assertParse } from "../../internal/_test_assertParse";

export const test_assertParse_AtomicSimple = _test_assertParse(
    "AtomicSimple",
    AtomicSimple.generate,
    (input) => typia.assertParse<AtomicSimple>(input),
    AtomicSimple.SPOILERS,
);
