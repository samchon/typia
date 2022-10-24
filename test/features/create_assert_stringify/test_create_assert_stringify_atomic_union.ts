import TSON from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_assert_stringify } from "./../assert_stringify/_test_assert_stringify";

export const test_create_assert_stringify_atomic_union = _test_assert_stringify(
    "union atomic",
    AtomicUnion.generate,
    TSON.createAssertStringify<AtomicUnion>(),
    AtomicUnion.SPOILERS,
);
