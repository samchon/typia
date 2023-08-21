import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { TagType } from "../../structures/TagType";

export const test_assert_TagType = _test_assert("TagType")<TagType>(TagType)(
    (input) => typia.assert<TagType>(input),
);
