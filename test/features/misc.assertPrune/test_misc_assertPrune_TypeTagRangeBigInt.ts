import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_misc_assertPrune_TypeTagRangeBigInt = _test_misc_assertPrune(
  "TypeTagRangeBigInt",
)<TypeTagRangeBigInt>(TypeTagRangeBigInt)((input) =>
  typia.misc.assertPrune<TypeTagRangeBigInt>(input),
);
