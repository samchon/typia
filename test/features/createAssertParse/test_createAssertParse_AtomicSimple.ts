import TSON from "../../../src";
import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_AtomicSimple = _test_assertParse(
    "AtomicSimple",
    AtomicSimple.generate,
    TSON.createAssertParse<AtomicSimple>(),
    AtomicSimple.SPOILERS,
);
