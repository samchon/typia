import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_createAssertGuard_TypeTagPattern = _test_assertGuard(
  "TypeTagPattern",
)<TypeTagPattern>(TypeTagPattern)(typia.createAssertGuard<TypeTagPattern>());
