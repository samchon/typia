import typia from "typia";

import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_prune } from "../internal/_test_prune";

export const test_prune_ObjectRecursive = _test_prune(
    "ObjectRecursive",
    ObjectRecursive.generate,
    (input) => typia.prune(input),
);
