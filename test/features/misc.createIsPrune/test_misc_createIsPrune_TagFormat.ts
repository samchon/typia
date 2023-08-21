import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TagFormat } from "../../structures/TagFormat";

export const test_misc_isPrune_TagFormat = _test_misc_isPrune(
    "TagFormat",
)<TagFormat>(TagFormat)(typia.misc.createIsPrune<TagFormat>());
