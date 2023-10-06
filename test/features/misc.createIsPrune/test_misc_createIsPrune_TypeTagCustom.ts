import typia from "../../../src";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_misc_createIsPrune_TypeTagCustom = _test_misc_isPrune(
    "TypeTagCustom",
)<TypeTagCustom>(
    TypeTagCustom
)(typia.misc.createIsPrune<TypeTagCustom>());
