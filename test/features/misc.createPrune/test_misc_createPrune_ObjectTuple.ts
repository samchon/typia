import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_misc_prune_ObjectTuple = _test_misc_prune<ObjectTuple>(
    ObjectTuple,
)(typia.misc.createPrune<ObjectTuple>());
