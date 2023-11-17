import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_assertGuardEquals_TypeTagRange = _test_assertGuardEquals(
    "TypeTagRange",
)<TypeTagRange>(TypeTagRange)((input) =>
    typia.assertGuardEquals<TypeTagRange>(input),
);
