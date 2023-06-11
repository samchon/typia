import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_isClone_AtomicSimple = _test_isClone(
    "AtomicSimple",
    AtomicSimple.generate,
    (input) => typia.isClone(input),
    AtomicSimple.SPOILERS,
);
