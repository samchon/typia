import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TagInfinite } from "../../structures/TagInfinite";

export const test_assertEquals_TagInfinite = _test_assertEquals<TagInfinite>(
    TagInfinite,
)((input) => typia.assertEquals<TagInfinite>(input));
