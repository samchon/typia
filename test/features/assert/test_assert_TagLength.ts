import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { TagLength } from "../../structures/TagLength";

export const test_assert_TagLength = _test_assert(
    "TagLength",
    TagLength.generate,
    (input) => typia.assert<TagLength>(input),
    TagLength.SPOILERS,
);
