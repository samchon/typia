import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_isPrune_AtomicSimple = _test_isPrune(
    "AtomicSimple",
    AtomicSimple.generate,
    (input) => typia.isPrune<AtomicSimple>(input),
    AtomicSimple.SPOILERS,
);
