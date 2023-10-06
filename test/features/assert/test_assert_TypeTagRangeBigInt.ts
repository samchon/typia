import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_assert_TypeTagRangeBigInt = _test_assert(
    "TypeTagRangeBigInt",
)<TypeTagRangeBigInt>(TypeTagRangeBigInt)((input) =>
    typia.assert<TypeTagRangeBigInt>(input),
);
