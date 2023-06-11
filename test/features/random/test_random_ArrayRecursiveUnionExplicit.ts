import typia from "../../../src";

import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";
import { _test_random } from "../../internal/_test_random";

export const test_random_ArrayRecursiveUnionExplicit = _test_random(
    "ArrayRecursiveUnionExplicit",
    () => typia.random<ArrayRecursiveUnionExplicit>(),
typia.createAssert<typia.Primitive<ArrayRecursiveUnionExplicit>>(),
);
