import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { TagCustom } from "../../structures/TagCustom";

export const test_isClone_TagCustom = _test_isClone(
    "TagCustom",
    TagCustom.generate,
    (input) => typia.isClone<TagCustom>(input),
    TagCustom.SPOILERS,
);
