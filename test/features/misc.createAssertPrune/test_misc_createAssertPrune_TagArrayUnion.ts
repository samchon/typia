import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TagArrayUnion } from "../../structures/TagArrayUnion";

export const test_misc_assertPrune_TagArrayUnion = _test_misc_assertPrune(
    "TagArrayUnion",
)<TagArrayUnion>(TagArrayUnion)(typia.misc.createAssertPrune<TagArrayUnion>());
