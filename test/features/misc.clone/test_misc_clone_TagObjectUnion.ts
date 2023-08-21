import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { TagObjectUnion } from "../../structures/TagObjectUnion";

export const test_misc_clone_TagObjectUnion = _test_misc_clone(
    "TagObjectUnion",
)<TagObjectUnion>(TagObjectUnion)((input) =>
    typia.misc.clone<TagObjectUnion>(input),
);
