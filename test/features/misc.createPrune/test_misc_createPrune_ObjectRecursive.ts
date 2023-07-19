import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_misc_prune_ObjectRecursive =
    _test_misc_prune<ObjectRecursive>(ObjectRecursive)(
        typia.misc.createPrune<ObjectRecursive>(),
    );
