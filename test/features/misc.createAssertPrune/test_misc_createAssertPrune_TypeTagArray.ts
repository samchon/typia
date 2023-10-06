import typia from "../../../src";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_misc_createAssertPrune_TypeTagArray = _test_misc_assertPrune(
    "TypeTagArray",
)<TypeTagArray>(
    TypeTagArray
)(typia.misc.createAssertPrune<TypeTagArray>());
