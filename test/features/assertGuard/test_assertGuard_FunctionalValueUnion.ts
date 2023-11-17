import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_assertGuard_FunctionalValueUnion = _test_assertGuard(
    "FunctionalValueUnion",
)<FunctionalValueUnion>(FunctionalValueUnion)((input) =>
    typia.assertGuard<FunctionalValueUnion>(input),
);
