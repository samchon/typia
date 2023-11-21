import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_assertGuardEquals_TypeTagTypeUnion = _test_assertGuardEquals(
  "TypeTagTypeUnion",
)<TypeTagTypeUnion>(TypeTagTypeUnion)((input) =>
  typia.assertGuardEquals<TypeTagTypeUnion>(input),
);
