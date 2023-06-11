import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TagFormat } from "../../structures/TagFormat";

export const test_createAssertEquals_TagFormat = _test_assertEquals(
    "TagFormat",
    TagFormat.generate,
    typia.createAssertEquals<TagFormat>(),
);
