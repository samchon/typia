import TSON from "../../../src";
import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_is } from "./_test_is";

export const test_is_atomic = _test_is(
    "atomic",
    AtomicSimple.generate,
    (input) => TSON.is(input),
    [
        (input) => (input[0] = 0 as any as boolean),
        (input) => (input[1] = "one" as any as number),
        (input) => (input[2] = 2 as any as string),
    ],
);
