import TSON from "../../../src";
import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_AtomicSimple = _test_assertStringify(
    "AtomicSimple",
    AtomicSimple.generate,
    (input) => TSON.assertStringify(input),
    AtomicSimple.SPOILERS,
);