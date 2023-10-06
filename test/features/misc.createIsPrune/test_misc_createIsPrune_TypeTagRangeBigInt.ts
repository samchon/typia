import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_misc_createIsPrune_TypeTagRangeBigInt = _test_misc_isPrune(
    "TypeTagRangeBigInt",
)<TypeTagRangeBigInt>(TypeTagRangeBigInt)(
    typia.misc.createIsPrune<TypeTagRangeBigInt>(),
);
