import TSON from "../../../src";
import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_create_assert_type_atomic_simple = _test_assert_type(
    "atomic",
    AtomicSimple.generate,
    TSON.createAssertType<AtomicSimple>(),
    AtomicSimple.SPOILERS,
);
