import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_misc_createAssertPrune_ArrayMatrix = _test_misc_assertPrune(
    "ArrayMatrix",
)<ArrayMatrix>(ArrayMatrix)(typia.misc.createAssertPrune<ArrayMatrix>());
