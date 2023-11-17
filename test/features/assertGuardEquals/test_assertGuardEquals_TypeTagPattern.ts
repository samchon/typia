import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_assertGuardEquals_TypeTagPattern = _test_assertGuardEquals(
    "TypeTagPattern",
)<TypeTagPattern>(TypeTagPattern)((input) =>
    typia.assertGuardEquals<TypeTagPattern>(input),
);
