import typia from "../../../src";
import { TagFormat } from "../../structures/TagFormat";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_TagFormat = _test_isParse(
    "TagFormat",
    TagFormat.generate,
    typia.createIsParse<TagFormat>(),
    TagFormat.SPOILERS,
);