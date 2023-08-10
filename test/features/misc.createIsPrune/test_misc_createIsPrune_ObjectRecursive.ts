import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_misc_isPrune_ObjectRecursive =
    _test_misc_isPrune<ObjectRecursive>(ObjectRecursive)(
        typia.misc.createIsPrune<ObjectRecursive>(),
    );
