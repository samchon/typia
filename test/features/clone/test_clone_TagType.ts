import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { TagType } from "../../structures/TagType";

export const test_clone_TagType = _test_clone(
    "TagType",
    TagType.generate,
    (input) => typia.clone<TagType>(input),
);
