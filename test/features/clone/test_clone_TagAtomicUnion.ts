import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";

export const test_clone_TagAtomicUnion = _test_clone(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    (input) => typia.clone(input),
);
