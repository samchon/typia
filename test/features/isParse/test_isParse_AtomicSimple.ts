import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_isParse_AtomicSimple = _test_isParse(
    "AtomicSimple",
    AtomicSimple.generate,
    (input) => typia.isParse<AtomicSimple>(input),
    AtomicSimple.SPOILERS,
);
