import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_misc_createAssertPrune_TypeTagTypeBigInt =
    _test_misc_assertPrune("TypeTagTypeBigInt")<TypeTagTypeBigInt>(
        TypeTagTypeBigInt,
    )(typia.misc.createAssertPrune<TypeTagTypeBigInt>());
