import TSON from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_atomic_union = _test_stringify(
    "union atomic",
    AtomicUnion.generate,
    (input) => TSON.stringify(input),
);
