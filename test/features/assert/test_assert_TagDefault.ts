import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { TagDefault } from "../../structures/TagDefault";

export const test_assert_TagDefault = _test_assert("TagDefault")<TagDefault>(
    TagDefault,
)((input) => typia.assert<TagDefault>(input));
