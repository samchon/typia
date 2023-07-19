import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_misc_assertPrune_ObjectRecursive =
    _test_misc_assertPrune<ObjectRecursive>(ObjectRecursive)((input) =>
        typia.misc.assertPrune(input),
    );
