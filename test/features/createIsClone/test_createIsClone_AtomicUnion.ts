import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_createIsClone_AtomicUnion = _test_isClone(
    "AtomicUnion",
    AtomicUnion.generate,
    typia.createIsClone<AtomicUnion>(),
    AtomicUnion.SPOILERS,
);
