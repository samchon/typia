import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TagObjectUnion } from "../../structures/TagObjectUnion";

export const test_misc_prune_TagObjectUnion = _test_misc_prune<TagObjectUnion>(
    TagObjectUnion,
)(typia.misc.createPrune<TagObjectUnion>());
