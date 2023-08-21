import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { TagDefault } from "../../structures/TagDefault";

export const test_misc_validateClone_TagDefault = _test_misc_validateClone(
    "TagDefault",
)<TagDefault>(TagDefault)(typia.misc.createValidateClone<TagDefault>());
