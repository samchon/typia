import TSON from "../../../src";
import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_AtomicSimple = _test_isClone(
    "AtomicSimple",
    AtomicSimple.generate,
    TSON.createIsClone<AtomicSimple>(),
    AtomicSimple.SPOILERS,
);
