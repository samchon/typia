import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_random_ArrayRecursiveUnionExplicit = _test_random(
    "ArrayRecursiveUnionExplicit",
    () => typia.random<ArrayRecursiveUnionExplicit>(),
    typia.createAssert<typia.Primitive<ArrayRecursiveUnionExplicit>>(),
);
