import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TagNaN } from "../../structures/TagNaN";

export const test_createAssertEquals_TagNaN = _test_assertEquals(
    "TagNaN",
    TagNaN.generate,
    typia.createAssertEquals<TagNaN>(),
);
