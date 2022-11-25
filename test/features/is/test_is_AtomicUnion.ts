import TSON from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_is } from "../internal/_test_is";

export const test_is_AtomicUnion = _test_is(
    "AtomicUnion",
    AtomicUnion.generate,
    (input) => TSON.is(input),
    AtomicUnion.SPOILERS,
);