import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_misc_createIsPrune_TypeTagTuple = _test_misc_isPrune(
    "TypeTagTuple",
)<TypeTagTuple>(TypeTagTuple)(typia.misc.createIsPrune<TypeTagTuple>());
