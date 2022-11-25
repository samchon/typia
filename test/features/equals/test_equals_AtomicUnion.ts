import TSON from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_AtomicUnion = _test_equals(
    "AtomicUnion",
    AtomicUnion.generate,
    (input) => TSON.equals(input),
);