import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_validateClone_AtomicSimple = _test_validateClone(
    "AtomicSimple",
    AtomicSimple.generate,
    (input) => typia.validateClone<AtomicSimple>(input),
    AtomicSimple.SPOILERS,
);
