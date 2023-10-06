import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_misc_createPrune_ArraySimple = _test_misc_prune(
    "ArraySimple",
)<ArraySimple>(ArraySimple)(typia.misc.createPrune<ArraySimple>());
