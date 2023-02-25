import typia from "../../../src";
import { TagNaN } from "../../structures/TagNaN";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_TagNaN = _test_assert(
    "TagNaN",
    TagNaN.generate,
    typia.createAssert<TagNaN>(),
    TagNaN.SPOILERS,
);
