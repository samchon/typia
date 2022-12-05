import TSON from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_AtomicUnion = _test_validateClone(
    "AtomicUnion",
    AtomicUnion.generate,
    (input) => TSON.validateClone(input),
    AtomicUnion.SPOILERS,
);
