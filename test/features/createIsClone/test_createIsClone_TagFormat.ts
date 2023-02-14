import typia from "../../../src";
import { TagFormat } from "../../structures/TagFormat";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_TagFormat = _test_isClone(
    "TagFormat",
    TagFormat.generate,
    typia.createIsClone<TagFormat>(),
    TagFormat.SPOILERS,
);