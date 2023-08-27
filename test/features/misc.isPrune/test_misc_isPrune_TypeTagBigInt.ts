import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_misc_isPrune_TypeTagBigInt = _test_misc_isPrune(
    "TypeTagBigInt",
)<TypeTagBigInt>(TypeTagBigInt)((input) =>
    typia.misc.isPrune<TypeTagBigInt>(input),
);
