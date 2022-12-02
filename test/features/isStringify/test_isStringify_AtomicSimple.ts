import TSON from "../../../src";
import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_AtomicSimple = _test_isStringify(
    "AtomicSimple",
    AtomicSimple.generate,
    (input) => TSON.isStringify(input),
    AtomicSimple.SPOILERS,
);
