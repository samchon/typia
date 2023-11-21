import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_createAssertGuard_NativeSimple = _test_assertGuard(
  "NativeSimple",
)<NativeSimple>(NativeSimple)(typia.createAssertGuard<NativeSimple>());
