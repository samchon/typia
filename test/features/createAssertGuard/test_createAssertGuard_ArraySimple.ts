import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_createAssertGuard_ArraySimple = _test_assertGuard(
  "ArraySimple",
)<ArraySimple>(ArraySimple)(typia.createAssertGuard<ArraySimple>());
