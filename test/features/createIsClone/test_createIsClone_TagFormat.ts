import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { TagFormat } from "../../structures/TagFormat";

export const test_createIsClone_TagFormat = _test_isClone(
    "TagFormat",
    TagFormat.generate,
    typia.createIsClone<TagFormat>(),
    TagFormat.SPOILERS,
);
