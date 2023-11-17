import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_assertGuard_FunctionalValue = _test_assertGuard(
    "FunctionalValue",
)<FunctionalValue>(FunctionalValue)((input) =>
    typia.assertGuard<FunctionalValue>(input),
);
