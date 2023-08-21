import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TagNaN } from "../../structures/TagNaN";

export const test_misc_prune_TagNaN = _test_misc_prune("TagNaN")<TagNaN>(
    TagNaN,
)(typia.misc.createPrune<TagNaN>());
