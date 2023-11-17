import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_assertGuard_TypeTagPattern = _test_assertGuard(
    "TypeTagPattern",
)<TypeTagPattern>(TypeTagPattern)((input) =>
    typia.assertGuard<TypeTagPattern>(input),
);
