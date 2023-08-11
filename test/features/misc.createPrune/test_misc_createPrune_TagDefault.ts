import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TagDefault } from "../../structures/TagDefault";

export const test_misc_prune_TagDefault = _test_misc_prune<TagDefault>(
    TagDefault,
)(typia.misc.createPrune<TagDefault>());
