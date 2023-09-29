import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_misc_createPrune_ObjectPartial = _test_misc_prune(
    "ObjectPartial",
)<ObjectPartial>(ObjectPartial)(typia.misc.createPrune<ObjectPartial>());
