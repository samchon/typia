import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TagCustom } from "../../structures/TagCustom";

export const test_misc_assertClone_TagCustom = _test_misc_assertClone(
    "TagCustom",
)<TagCustom>(TagCustom)(typia.misc.createAssertClone<TagCustom>());
