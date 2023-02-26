import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { TagType } from "../../structures/TagType";

export const test_createIsClone_TagType = _test_isClone(
    "TagType",
    TagType.generate,
    typia.createIsClone<TagType>(),
    TagType.SPOILERS,
);
