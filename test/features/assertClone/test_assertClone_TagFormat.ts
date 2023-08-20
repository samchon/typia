import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { TagFormat } from "../../structures/TagFormat";

export const test_assertClone_TagFormat = _test_assertClone(
    "TagFormat",
    TagFormat.generate,
    (input) => typia.assertClone<TagFormat>(input),
    TagFormat.SPOILERS,
);
