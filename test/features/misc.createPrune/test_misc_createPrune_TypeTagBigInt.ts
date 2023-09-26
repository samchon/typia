import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_misc_createPrune_TypeTagBigInt = _test_misc_prune(
    "TypeTagBigInt",
)<TypeTagBigInt>(TypeTagBigInt)(typia.misc.createPrune<TypeTagBigInt>());
