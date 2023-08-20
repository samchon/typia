import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_isStringify_AtomicSimple = _test_isStringify(
    "AtomicSimple",
    AtomicSimple.generate,
    (input) => typia.isStringify<AtomicSimple>(input),
    AtomicSimple.SPOILERS,
);
