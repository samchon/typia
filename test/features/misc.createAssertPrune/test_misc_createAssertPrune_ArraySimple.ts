import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_misc_createAssertPrune_ArraySimple = _test_misc_assertPrune(
  "ArraySimple",
)<ArraySimple>(ArraySimple)(typia.misc.createAssertPrune<ArraySimple>());
