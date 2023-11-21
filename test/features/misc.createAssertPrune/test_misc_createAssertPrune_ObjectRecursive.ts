import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_misc_createAssertPrune_ObjectRecursive =
  _test_misc_assertPrune("ObjectRecursive")<ObjectRecursive>(ObjectRecursive)(
    typia.misc.createAssertPrune<ObjectRecursive>(),
  );
