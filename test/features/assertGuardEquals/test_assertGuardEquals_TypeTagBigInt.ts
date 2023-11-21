import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_assertGuardEquals_TypeTagBigInt = _test_assertGuardEquals(
  "TypeTagBigInt",
)<TypeTagBigInt>(TypeTagBigInt)((input) =>
  typia.assertGuardEquals<TypeTagBigInt>(input),
);
