import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_misc_createPrune_ObjectPrimitive = _test_misc_prune(
    "ObjectPrimitive",
)<ObjectPrimitive>(ObjectPrimitive)(typia.misc.createPrune<ObjectPrimitive>());
