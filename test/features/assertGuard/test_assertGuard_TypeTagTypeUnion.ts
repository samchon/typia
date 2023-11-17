import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_assertGuard_TypeTagTypeUnion = _test_assertGuard(
    "TypeTagTypeUnion",
)<TypeTagTypeUnion>(TypeTagTypeUnion)((input) =>
    typia.assertGuard<TypeTagTypeUnion>(input),
);
