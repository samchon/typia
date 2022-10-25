import TSON from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_is_stringify } from "./_test_is_stringify";

export const test_is_stringify_atomic_union = _test_is_stringify(
    "union atomic",
    AtomicUnion.generate,
    (input) => TSON.isStringify(input),
    AtomicUnion.SPOILERS,
);
