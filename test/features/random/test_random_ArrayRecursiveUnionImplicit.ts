import typia from "../../../src";

import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";
import { _test_random } from "../../internal/_test_random";

export const test_random_ArrayRecursiveUnionImplicit = _test_random(
    "ArrayRecursiveUnionImplicit",
    () => typia.random<ArrayRecursiveUnionImplicit>(),
typia.createAssert<typia.Primitive<ArrayRecursiveUnionImplicit>>(),
);
