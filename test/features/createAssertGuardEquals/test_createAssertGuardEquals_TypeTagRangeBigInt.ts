import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_createAssertGuardEquals_TypeTagRangeBigInt =
  _test_assertGuardEquals("TypeTagRangeBigInt")<TypeTagRangeBigInt>(
    TypeTagRangeBigInt,
  )(typia.createAssertGuardEquals<TypeTagRangeBigInt>());
