import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";

export const test_createValidatePrune_TagAtomicUnion = _test_validatePrune(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    typia.createValidatePrune<TagAtomicUnion>(),
    TagAtomicUnion.SPOILERS,
);
