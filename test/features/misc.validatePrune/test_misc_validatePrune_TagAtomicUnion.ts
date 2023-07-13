import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";

export const test_misc_validatePrune_TagAtomicUnion = _test_misc_validatePrune(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    (input) => typia.misc.validatePrune(input),
    TagAtomicUnion.SPOILERS,
);
