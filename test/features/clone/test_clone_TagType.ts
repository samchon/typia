import typia from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_TagType = _test_clone(
    "TagType",
    TagType.generate,
    (input) => typia.clone(input),
);
