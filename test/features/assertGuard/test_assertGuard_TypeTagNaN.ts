import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_assertGuard_TypeTagNaN = _test_assertGuard(
  "TypeTagNaN",
)<TypeTagNaN>(TypeTagNaN)((input) => typia.assertGuard<TypeTagNaN>(input));
