import TSON from "../../../src";
import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_is } from "../internal/_test_is";

export const test_createIs_AtomicSimple = _test_is(
    "AtomicSimple",
    AtomicSimple.generate,
    TSON.createIs<AtomicSimple>(),
    AtomicSimple.SPOILERS,
);
