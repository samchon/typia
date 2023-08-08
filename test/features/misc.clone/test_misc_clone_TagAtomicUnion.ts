import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";

export const test_misc_clone_TagAtomicUnion = _test_misc_clone(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    (input) => typia.misc.clone(input),
);
