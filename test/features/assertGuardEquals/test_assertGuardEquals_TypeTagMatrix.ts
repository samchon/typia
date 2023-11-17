import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_assertGuardEquals_TypeTagMatrix = _test_assertGuardEquals(
    "TypeTagMatrix",
)<TypeTagMatrix>(TypeTagMatrix)((input) =>
    typia.assertGuardEquals<TypeTagMatrix>(input),
);
