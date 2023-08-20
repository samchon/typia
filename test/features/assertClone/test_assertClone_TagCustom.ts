import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { TagCustom } from "../../structures/TagCustom";

export const test_assertClone_TagCustom = _test_assertClone(
    "TagCustom",
    TagCustom.generate,
    (input) => typia.assertClone<TagCustom>(input),
    TagCustom.SPOILERS,
);
