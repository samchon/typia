import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_assertGuardEquals_TypeTagArray = _test_assertGuardEquals(
    "TypeTagArray",
)<TypeTagArray>(TypeTagArray)((input) =>
    typia.assertGuardEquals<TypeTagArray>(input),
);
