import TSON from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_TagType = _test_assert(
    "TagType",
    TagType.generate,
    TSON.createAssert<TagType>(),
    TagType.SPOILERS,
);