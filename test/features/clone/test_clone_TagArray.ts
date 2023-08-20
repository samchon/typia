import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { TagArray } from "../../structures/TagArray";

export const test_clone_TagArray = _test_clone(
    "TagArray",
    TagArray.generate,
    (input) => typia.clone<TagArray>(input),
);
