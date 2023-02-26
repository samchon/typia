import typia from "../../../src";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_assertPrune_TagAtomicUnion = _test_assertPrune(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    (input) => typia.assertPrune(input),
    TagAtomicUnion.SPOILERS,
);
