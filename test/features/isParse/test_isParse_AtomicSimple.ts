import TSON from "../../../src";
import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_AtomicSimple = _test_isParse(
    "AtomicSimple",
    AtomicSimple.generate,
    (input) => TSON.isParse<AtomicSimple>(input),
    AtomicSimple.SPOILERS,
);
