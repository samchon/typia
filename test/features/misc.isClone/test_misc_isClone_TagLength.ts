import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { TagLength } from "../../structures/TagLength";

export const test_misc_isClone_TagLength = _test_misc_isClone<TagLength>(
    TagLength,
)((input) => typia.misc.isClone(input));
