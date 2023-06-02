import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TagType } from "../../structures/TagType";

export const test_createAssertEquals_TagType = _test_assertEquals(
    "TagType",
    TagType.generate,
    typia.createAssertEquals<TagType>(),
);
