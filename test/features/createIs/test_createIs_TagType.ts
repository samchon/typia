import TSON from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_is } from "../internal/_test_is";

export const test_createIs_TagType = _test_is(
    "TagType",
    TagType.generate,
    TSON.createIs<TagType>(),
    TagType.SPOILERS,
);