import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";

export const test_createClone_TagAtomicUnion = _test_clone(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    typia.createClone<TagAtomicUnion>(),
);
