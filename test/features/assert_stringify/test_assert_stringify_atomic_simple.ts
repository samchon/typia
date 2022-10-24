import TSON from "../../../src";
import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_assert_stringify } from "./_test_assert_stringify";

export const test_assert_stringify_atomic = _test_assert_stringify(
    "atomic",
    AtomicSimple.generate,
    (input) => TSON.assertStringify(input),
    AtomicSimple.SPOILERS,
);
