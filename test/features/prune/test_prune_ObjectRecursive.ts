import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_prune_ObjectRecursive = _test_prune(
    "ObjectRecursive",
    ObjectRecursive.generate,
    (input) => typia.prune(input),
);
