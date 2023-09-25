import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_misc_createAssertPrune_TypeTagRangeBigInt =
    _test_misc_assertPrune("TypeTagRangeBigInt")<TypeTagRangeBigInt>(
        TypeTagRangeBigInt,
    )(typia.misc.createAssertPrune<TypeTagRangeBigInt>());
