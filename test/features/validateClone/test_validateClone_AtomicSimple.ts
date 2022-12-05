import TSON from "../../../src";
import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_AtomicSimple = _test_validateClone(
    "AtomicSimple",
    AtomicSimple.generate,
    (input) => TSON.validateClone(input),
    AtomicSimple.SPOILERS,
);
