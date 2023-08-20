import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_is_AtomicSimple = _test_is(
    "AtomicSimple",
    AtomicSimple.generate,
    (input) => typia.is<AtomicSimple>(input),
    AtomicSimple.SPOILERS,
);
