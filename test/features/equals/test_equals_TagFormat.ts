import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { TagFormat } from "../../structures/TagFormat";

export const test_equals_TagFormat = _test_equals("TagFormat")<TagFormat>(
    TagFormat,
)((input) => typia.equals<TagFormat>(input));
