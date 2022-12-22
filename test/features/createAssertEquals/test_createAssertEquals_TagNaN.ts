import typia from "../../../src";
import { TagNaN } from "../../structures/TagNaN";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_TagNaN = _test_assertEquals(
    "TagNaN",
    TagNaN.generate,
    typia.createAssertEquals<TagNaN>(),
);