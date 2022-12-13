import typia from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_TagType = _test_assertParse(
    "TagType",
    TagType.generate,
    typia.createAssertParse<TagType>(),
    TagType.SPOILERS,
);