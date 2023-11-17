import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_createAssertGuard_ArrayRecursive = _test_assertGuard(
  "ArrayRecursive",
)<ArrayRecursive>(ArrayRecursive)(typia.createAssertGuard<ArrayRecursive>());
