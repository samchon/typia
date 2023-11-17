import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_createAssertGuardEquals_ArrayRecursive =
  _test_assertGuardEquals("ArrayRecursive")<ArrayRecursive>(ArrayRecursive)(
    typia.createAssertGuardEquals<ArrayRecursive>(),
  );
