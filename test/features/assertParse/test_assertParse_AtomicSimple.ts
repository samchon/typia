import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_assertParse_AtomicSimple = _test_assertParse(
    "AtomicSimple",
    AtomicSimple.generate,
    (input) => typia.assertParse<AtomicSimple>(input),
    AtomicSimple.SPOILERS,
);
