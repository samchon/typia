import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_misc_createAssertPrune_TypeTagTuple = _test_misc_assertPrune(
    "TypeTagTuple",
)<TypeTagTuple>(TypeTagTuple)(typia.misc.createAssertPrune<TypeTagTuple>());
