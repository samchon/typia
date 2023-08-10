import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TagCustom } from "../../structures/TagCustom";

export const test_misc_isPrune_TagCustom = _test_misc_isPrune<TagCustom>(
    TagCustom,
)(typia.misc.createIsPrune<TagCustom>());
