import TSON from "../../../src";
import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_AtomicSimple = _test_assertClone(
    "AtomicSimple",
    AtomicSimple.generate,
    TSON.createAssertClone<AtomicSimple>(),
    AtomicSimple.SPOILERS,
);