import TSON from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_assert_stringify_atomic_union = _test_assert_stringify(
    "union atomic",
    AtomicUnion.generate,
    (input) => TSON.assertStringify(input),
    AtomicUnion.SPOILERS,
);
