import typia from "../../../src";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";
import { _test_random } from "../internal/_test_random";

export const test_createRandom_ArrayRecursiveUnionImplicit = _test_random(
    "ArrayRecursiveUnionImplicit",
    typia.createRandom<ArrayRecursiveUnionImplicit>(),
    typia.createAssert<ArrayRecursiveUnionImplicit>(),
);
