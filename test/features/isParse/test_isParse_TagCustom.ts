import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { TagCustom } from "../../structures/TagCustom";

export const test_isParse_TagCustom = _test_isParse(
    "TagCustom",
    TagCustom.generate,
    (input) => typia.isParse<TagCustom>(input),
    TagCustom.SPOILERS,
);
