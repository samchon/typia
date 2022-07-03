import TSON from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_is } from "./_test_is";

export const test_is_atomic_union = _test_is(
    "union atomic",
    AtomicUnion.generate,
    (input) => TSON.is(input),
    [
        (input) => (input[0] = [] as any),
        (input) => (input[1] = {} as any),
        (input) => (input[2] = undefined!),
    ],
);
