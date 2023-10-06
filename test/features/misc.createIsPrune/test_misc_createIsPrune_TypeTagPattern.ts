import typia from "../../../src";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_misc_createIsPrune_TypeTagPattern = _test_misc_isPrune(
    "TypeTagPattern",
)<TypeTagPattern>(
    TypeTagPattern
)(typia.misc.createIsPrune<TypeTagPattern>());
