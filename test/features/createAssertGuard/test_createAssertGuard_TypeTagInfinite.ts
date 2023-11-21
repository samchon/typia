import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_createAssertGuard_TypeTagInfinite = _test_assertGuard(
  "TypeTagInfinite",
)<TypeTagInfinite>(TypeTagInfinite)(typia.createAssertGuard<TypeTagInfinite>());
