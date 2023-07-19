import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { TagCustom } from "../../structures/TagCustom";

export const test_misc_isClone_TagCustom = _test_misc_isClone<TagCustom>(
    TagCustom,
)((input) => typia.misc.isClone(input));
