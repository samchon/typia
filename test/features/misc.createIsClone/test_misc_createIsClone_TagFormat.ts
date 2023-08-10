import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { TagFormat } from "../../structures/TagFormat";

export const test_misc_isClone_TagFormat = _test_misc_isClone<TagFormat>(
    TagFormat,
)(typia.misc.createIsClone<TagFormat>());
