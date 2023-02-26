import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { TagFormat } from "../../structures/TagFormat";

export const test_createAssert_TagFormat = _test_assert(
    "TagFormat",
    TagFormat.generate,
    typia.createAssert<TagFormat>(),
    TagFormat.SPOILERS,
);
