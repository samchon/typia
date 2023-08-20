import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TagCustom } from "../../structures/TagCustom";

export const test_assertEquals_TagCustom = _test_assertEquals(
    "TagCustom",
    TagCustom.generate,
    (input) => typia.assertEquals<TagCustom>(input),
);
