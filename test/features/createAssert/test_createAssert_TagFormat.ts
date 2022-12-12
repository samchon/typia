import typia from "../../../src";
import { TagFormat } from "../../structures/TagFormat";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_TagFormat = _test_assert(
    "TagFormat",
    TagFormat.generate,
    typia.createAssert<TagFormat>(),
    TagFormat.SPOILERS,
);