import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TagFormat } from "../../structures/TagFormat";

export const test_assertEquals_TagFormat = _test_assertEquals(
    "TagFormat",
    TagFormat.generate,
    (input) => typia.assertEquals<TagFormat>(input),
);
