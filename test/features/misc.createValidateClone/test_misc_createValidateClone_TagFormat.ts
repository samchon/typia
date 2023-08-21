import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { TagFormat } from "../../structures/TagFormat";

export const test_misc_validateClone_TagFormat = _test_misc_validateClone(
    "TagFormat",
)<TagFormat>(TagFormat)(typia.misc.createValidateClone<TagFormat>());
