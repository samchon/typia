import TSON from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_TagType = _test_assertEquals(
    "TagType",
    TagType.generate,
    TSON.createAssertEquals<TagType>(),
);