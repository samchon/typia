import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";

export const test_assertPrune_TagAtomicUnion = _test_assertPrune(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    (input) => typia.assertPrune(input),
    TagAtomicUnion.SPOILERS,
);
