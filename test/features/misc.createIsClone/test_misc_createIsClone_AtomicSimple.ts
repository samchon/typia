import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_misc_isClone_AtomicSimple = _test_misc_isClone(
    "AtomicSimple",
    AtomicSimple.generate,
    typia.misc.createIsClone<AtomicSimple>(),
    AtomicSimple.SPOILERS,
);
