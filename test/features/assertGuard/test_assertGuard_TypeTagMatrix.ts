import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_assertGuard_TypeTagMatrix = _test_assertGuard(
    "TypeTagMatrix",
)<TypeTagMatrix>(TypeTagMatrix)((input) =>
    typia.assertGuard<TypeTagMatrix>(input),
);
