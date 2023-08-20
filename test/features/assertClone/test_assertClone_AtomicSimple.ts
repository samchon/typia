import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_assertClone_AtomicSimple = _test_assertClone(
    "AtomicSimple",
    AtomicSimple.generate,
    (input) => typia.assertClone<AtomicSimple>(input),
    AtomicSimple.SPOILERS,
);
