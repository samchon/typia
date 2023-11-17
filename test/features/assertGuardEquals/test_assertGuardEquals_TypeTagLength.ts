import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_assertGuardEquals_TypeTagLength = _test_assertGuardEquals(
    "TypeTagLength",
)<TypeTagLength>(TypeTagLength)((input) =>
    typia.assertGuardEquals<TypeTagLength>(input),
);
