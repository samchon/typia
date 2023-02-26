import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_isClone_AtomicUnion = _test_isClone(
    "AtomicUnion",
    AtomicUnion.generate,
    (input) => typia.isClone(input),
    AtomicUnion.SPOILERS,
);
