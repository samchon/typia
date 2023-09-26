import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_misc_createAssertPrune_TypeTagCustom = _test_misc_assertPrune(
    "TypeTagCustom",
)<TypeTagCustom>(TypeTagCustom)(typia.misc.createAssertPrune<TypeTagCustom>());
