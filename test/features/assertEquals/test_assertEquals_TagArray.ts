import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TagArray } from "../../structures/TagArray";

export const test_assertEquals_TagArray = _test_assertEquals<TagArray>(
    TagArray,
)((input) => typia.assertEquals<TagArray>(input));
