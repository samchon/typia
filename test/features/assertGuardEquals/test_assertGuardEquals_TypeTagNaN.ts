import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_assertGuardEquals_TypeTagNaN = _test_assertGuardEquals(
    "TypeTagNaN",
)<TypeTagNaN>(TypeTagNaN)((input) =>
    typia.assertGuardEquals<TypeTagNaN>(input),
);
