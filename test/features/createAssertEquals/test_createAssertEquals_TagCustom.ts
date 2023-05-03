import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TagCustom } from "../../structures/TagCustom";

export const test_createAssertEquals_TagCustom = _test_assertEquals(
    "TagCustom",
    TagCustom.generate,
    typia.createAssertEquals<TagCustom>(),
);
