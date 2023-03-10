import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_isParse_AtomicUnion = _test_isParse(
    "AtomicUnion",
    AtomicUnion.generate,
    (input) => typia.isParse<AtomicUnion>(input),
    AtomicUnion.SPOILERS,
);
