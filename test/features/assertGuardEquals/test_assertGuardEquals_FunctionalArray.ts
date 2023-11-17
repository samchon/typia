import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_assertGuardEquals_FunctionalArray = _test_assertGuardEquals(
    "FunctionalArray",
)<FunctionalArray>(FunctionalArray)((input) =>
    typia.assertGuardEquals<FunctionalArray>(input),
);
