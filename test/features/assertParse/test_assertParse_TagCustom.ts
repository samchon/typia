import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { TagCustom } from "../../structures/TagCustom";

export const test_assertParse_TagCustom = _test_assertParse(
    "TagCustom",
    TagCustom.generate,
    (input) => typia.assertParse<TagCustom>(input),
    TagCustom.SPOILERS,
);
