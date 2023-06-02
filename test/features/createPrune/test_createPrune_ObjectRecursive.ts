import typia from "../../../src";

import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_prune } from "../../internal/_test_prune";

export const test_createPrune_ObjectRecursive = _test_prune(
    "ObjectRecursive",
    ObjectRecursive.generate,
    typia.createPrune<ObjectRecursive>(),
);
