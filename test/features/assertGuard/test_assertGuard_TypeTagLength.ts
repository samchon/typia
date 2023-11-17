import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_assertGuard_TypeTagLength = _test_assertGuard(
  "TypeTagLength",
)<TypeTagLength>(TypeTagLength)((input) =>
  typia.assertGuard<TypeTagLength>(input),
);
