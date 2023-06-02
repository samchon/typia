import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_createAssertClone_AtomicUnion = _test_assertClone(
    "AtomicUnion",
    AtomicUnion.generate,
    typia.createAssertClone<AtomicUnion>(),
    AtomicUnion.SPOILERS,
);
