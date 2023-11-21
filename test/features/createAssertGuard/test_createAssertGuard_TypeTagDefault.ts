import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_createAssertGuard_TypeTagDefault = _test_assertGuard(
  "TypeTagDefault",
)<TypeTagDefault>(TypeTagDefault)(typia.createAssertGuard<TypeTagDefault>());
