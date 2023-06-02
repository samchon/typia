import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_createAssertClone_AtomicSimple = _test_assertClone(
    "AtomicSimple",
    AtomicSimple.generate,
    typia.createAssertClone<AtomicSimple>(),
    AtomicSimple.SPOILERS,
);
