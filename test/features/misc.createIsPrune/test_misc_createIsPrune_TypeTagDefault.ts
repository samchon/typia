import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_misc_createIsPrune_TypeTagDefault = _test_misc_isPrune(
    "TypeTagDefault",
)<TypeTagDefault>(TypeTagDefault)(typia.misc.createIsPrune<TypeTagDefault>());
