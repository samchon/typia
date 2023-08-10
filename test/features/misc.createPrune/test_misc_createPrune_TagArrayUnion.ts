import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TagArrayUnion } from "../../structures/TagArrayUnion";

export const test_misc_prune_TagArrayUnion = _test_misc_prune<TagArrayUnion>(
    TagArrayUnion,
)(typia.misc.createPrune<TagArrayUnion>());
