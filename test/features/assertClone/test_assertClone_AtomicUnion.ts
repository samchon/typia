import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_assertClone_AtomicUnion = _test_assertClone(
    "AtomicUnion",
    AtomicUnion.generate,
    (input) => typia.assertClone<AtomicUnion>(input),
    AtomicUnion.SPOILERS,
);
