import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_misc_isPrune_ArraySimple = _test_misc_isPrune(
    "ArraySimple",
)<ArraySimple>(ArraySimple)(typia.misc.createIsPrune<ArraySimple>());
