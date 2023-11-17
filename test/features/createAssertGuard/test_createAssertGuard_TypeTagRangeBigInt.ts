import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_createAssertGuard_TypeTagRangeBigInt = _test_assertGuard(
  "TypeTagRangeBigInt",
)<TypeTagRangeBigInt>(TypeTagRangeBigInt)(
  typia.createAssertGuard<TypeTagRangeBigInt>(),
);
