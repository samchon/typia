import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_createIsClone_AtomicSimple = _test_isClone(
    "AtomicSimple",
    AtomicSimple.generate,
    typia.createIsClone<AtomicSimple>(),
    AtomicSimple.SPOILERS,
);
