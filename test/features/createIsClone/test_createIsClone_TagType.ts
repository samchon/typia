import TSON from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_TagType = _test_isClone(
    "TagType",
    TagType.generate,
    TSON.createIsClone<TagType>(),
    TagType.SPOILERS,
);
