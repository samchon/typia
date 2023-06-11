import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_createAssertParse_AtomicUnion = _test_assertParse(
    "AtomicUnion",
    AtomicUnion.generate,
    typia.createAssertParse<AtomicUnion>(),
    AtomicUnion.SPOILERS,
);
