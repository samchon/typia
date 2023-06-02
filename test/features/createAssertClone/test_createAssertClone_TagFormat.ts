import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { TagFormat } from "../../structures/TagFormat";

export const test_createAssertClone_TagFormat = _test_assertClone(
    "TagFormat",
    TagFormat.generate,
    typia.createAssertClone<TagFormat>(),
    TagFormat.SPOILERS,
);
