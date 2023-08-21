import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";

export const test_misc_validateClone_TagAtomicUnion = _test_misc_validateClone(
    "TagAtomicUnion",
)<TagAtomicUnion>(TagAtomicUnion)(
    typia.misc.createValidateClone<TagAtomicUnion>(),
);
