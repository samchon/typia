import typia from "../../../src";

import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";
import { _test_prune } from "../../internal/_test_prune";

export const test_prune_ArrayRecursiveUnionExplicit = _test_prune(
    "ArrayRecursiveUnionExplicit",
    ArrayRecursiveUnionExplicit.generate,
    (input) => typia.prune(input),
);
