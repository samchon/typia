import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_assertGuard_FunctionalTuple = _test_assertGuard(
    "FunctionalTuple",
)<FunctionalTuple>(FunctionalTuple)((input) =>
    typia.assertGuard<FunctionalTuple>(input),
);
