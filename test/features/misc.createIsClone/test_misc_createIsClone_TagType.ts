import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { TagType } from "../../structures/TagType";

export const test_misc_isClone_TagType = _test_misc_isClone("TagType")<TagType>(
    TagType,
)(typia.misc.createIsClone<TagType>());
