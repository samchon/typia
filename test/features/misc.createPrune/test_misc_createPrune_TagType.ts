import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TagType } from "../../structures/TagType";

export const test_misc_prune_TagType = _test_misc_prune(
    "TagType",
    TagType.generate,
    typia.misc.createPrune<TagType>(),
);
