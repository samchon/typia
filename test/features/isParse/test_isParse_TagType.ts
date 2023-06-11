import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { TagType } from "../../structures/TagType";

export const test_isParse_TagType = _test_isParse(
    "TagType",
    TagType.generate,
    (input) => typia.isParse<TagType>(input),
    TagType.SPOILERS,
);
