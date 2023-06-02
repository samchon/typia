import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { TagType } from "../../structures/TagType";

export const test_createAssertParse_TagType = _test_assertParse(
    "TagType",
    TagType.generate,
    typia.createAssertParse<TagType>(),
    TagType.SPOILERS,
);
