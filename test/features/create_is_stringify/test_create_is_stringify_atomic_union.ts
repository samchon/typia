import TSON from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_create_is_stringify_atomic_union = _test_is_stringify(
    "union atomic",
    AtomicUnion.generate,
    TSON.createIsStringify<AtomicUnion>(),
    AtomicUnion.SPOILERS,
);
