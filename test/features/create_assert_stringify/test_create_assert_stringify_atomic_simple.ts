import TSON from "../../../src";
import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_assert_stringify } from "./../assert_stringify/_test_assert_stringify";

export const test_create_assert_stringify_atomic = _test_assert_stringify(
    "atomic",
    AtomicSimple.generate,
    TSON.createAssertStringify<AtomicSimple>(),
    AtomicSimple.SPOILERS,
);
