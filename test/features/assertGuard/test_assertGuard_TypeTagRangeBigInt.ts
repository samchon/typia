import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_assertGuard_TypeTagRangeBigInt = _test_assertGuard(
  "TypeTagRangeBigInt",
)<TypeTagRangeBigInt>(TypeTagRangeBigInt)((input) =>
  typia.assertGuard<TypeTagRangeBigInt>(input),
);
