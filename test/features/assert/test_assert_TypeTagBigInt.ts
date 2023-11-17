import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_assert_TypeTagBigInt = _test_assert(
  "TypeTagBigInt",
)<TypeTagBigInt>(TypeTagBigInt)((input) => typia.assert<TypeTagBigInt>(input));
