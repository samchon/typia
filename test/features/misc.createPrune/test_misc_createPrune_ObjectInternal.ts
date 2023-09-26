import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_misc_createPrune_ObjectInternal = _test_misc_prune(
    "ObjectInternal",
)<ObjectInternal>(ObjectInternal)(typia.misc.createPrune<ObjectInternal>());
