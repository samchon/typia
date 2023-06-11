import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { TagFormat } from "../../structures/TagFormat";

export const test_assertParse_TagFormat = _test_assertParse(
    "TagFormat",
    TagFormat.generate,
    (input) => typia.assertParse<TagFormat>(input),
    TagFormat.SPOILERS,
);
