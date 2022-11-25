import TSON from "../../../src";
import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_AtomicSimple = _test_clone(
    "AtomicSimple",
    AtomicSimple.generate,
    TSON.createClone<AtomicSimple>(),
);