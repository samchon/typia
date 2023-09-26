import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_misc_createAssertPrune_TypeTagType = _test_misc_assertPrune(
    "TypeTagType",
)<TypeTagType>(TypeTagType)(typia.misc.createAssertPrune<TypeTagType>());
