import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_assertGuard_FunctionalArrayUnion = _test_assertGuard(
    "FunctionalArrayUnion",
)<FunctionalArrayUnion>(FunctionalArrayUnion)((input) =>
    typia.assertGuard<FunctionalArrayUnion>(input),
);
