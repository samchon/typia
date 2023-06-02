import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { TagFormat } from "../../structures/TagFormat";

export const test_isParse_TagFormat = _test_isParse(
    "TagFormat",
    TagFormat.generate,
    (input) => typia.isParse<TagFormat>(input),
    TagFormat.SPOILERS,
);
