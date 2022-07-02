import TSON from "../../../src";
import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_is } from "./_test_is";

export const test_is_atomic_alias = _test_is(
    "generic alias",
    AtomicAlias.generate,
    (input) => TSON.is(input),
    [
        (input) => (input[0] = 0 as any as boolean),
        (input) => (input[1] = "one" as any as number),
        (input) => (input[2] = 2 as any as string),
    ],
);
