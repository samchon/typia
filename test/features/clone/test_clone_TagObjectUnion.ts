import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { TagObjectUnion } from "../../structures/TagObjectUnion";

export const test_clone_TagObjectUnion = _test_clone(
    "TagObjectUnion",
    TagObjectUnion.generate,
    (input) => typia.clone(input),
);
