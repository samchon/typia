import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { TagCustom } from "../../structures/TagCustom";

export const test_assert_TagCustom = _test_assert(
    "TagCustom",
    TagCustom.generate,
    (input) => typia.assert(input),
    TagCustom.SPOILERS,
);
