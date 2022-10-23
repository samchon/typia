import TSON from "../../../src";
import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_atomic_simple = _test_assert(
    "atomic",
    AtomicSimple.generate,
    TSON.createAssertType<AtomicSimple>(),
    AtomicSimple.SPOILERS,
);
